'use server'

import { createClient } from "@/utils/supabase/ServerClient"
export const DeletePropertyAction=async({id}:{id:string})=>{

  const supabase= await createClient()

   const {error, status}=await supabase.from('Property').delete().eq('id',id)

   if(error){
    throw new Error(error.message)
   }

   if(status===204){
    return{
      error: null,
      success: true,
      message:'Property deleted successfully!',
      payload: null,
    }
   }
   else{
    return{
      error: null,
      success: false,
      message:'Property not deleted!',
      payload: null,
    }
   }

}   

export const contactShowingAction = async ({ propertyId }: { propertyId: string }) => {
  const supabase = await createClient()

  const { data: authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData.user) {
    return {
      error: authError ? authError.message : "Unknown authentication error",
      success: false,
      message: 'User not authenticated',
      payload: null,
    }
  }

  const userId = authData.user.id

  const { data: userData, error: userError } = await supabase
    .from("Users")
    .select("point")
    .eq("id", userId)
    .single()

  if (userError) {
    return {
      error: userError.message,
      success: false,
      message: "User data fetch failed",
      payload: null,
    }
  }

  const { error: insertError } = await supabase
    .from("PropertyView")
    .insert({ propertyId, userId })

  if (insertError) {
    return {
      error: insertError.message,
      success: false,
      message: "Failed to log property view",
      payload: null,
    }
  }

  const updatedPoints = userData.point - 10

  const { error: pointUpdateError } = await supabase
    .from("Users")
    .update({ point: updatedPoints })
    .eq("id", userId)

  if (pointUpdateError) {
  
    await supabase
      .from("PropertyView")
      .delete()
      .eq("propertyId", propertyId)
      .eq("userId", userId)

    return {
      error: pointUpdateError.message,
      success: false,
      message: "Failed to deduct points.",
      payload: null,
    }
  }

    await supabase.from('WalletTransaction').insert({
    points:10,
    type:'ADJUSTMENT',
    userId,
    reason:'for unlock property contact details'
   })

   const {error}= await supabase.from('saveProperty').insert({
    propertyId,
    userId
   })

   if(error){
      return {
      error: error.message,
      success: false,
      message: "Failed to Save Property",
      payload: null,
    }
   }

  return {
    error: null,
    success: true,
    message: "Contact showing recorded and points deducted successfully.",
    payload: null,
  }
}


export const bookingAction = async ({ propertyId }: { propertyId: string }) => {
  const supabase = await createClient();

  // Get authenticated user
  const { data: authData, error: authError } = await supabase.auth.getUser();
  if (authError || !authData.user) {
    return {
      error: authError?.message || "Unknown authentication error",
      success: false,
      message: "User not authenticated",
      payload: null,
    };
  }

  const userId = authData.user.id;

  // Fetch user points
  const { data: userData, error: userError } = await supabase
    .from("Users")
    .select("point")
    .eq("id", userId)
    .single();

  if (userError || !userData) {
    return {
      error: userError?.message || "User not found",
      success: false,
      message: "Failed to retrieve user data",
      payload: null,
    };
  }

  if (userData.point < 100) {
    return {
      error: null,
      success: false,
      message: "Insufficient points to book property",
      payload: null,
    };
  }

  // Insert into Booking table
  const { error: insertError } = await supabase
    .from("Booking")
    .insert({ pointsUsed: 100, propertyId, userId });

  if (insertError) {
    return {
      error: insertError.message,
      success: false,
      message: "Failed to create booking",
      payload: null,
    };
  }

  // Update user points
  const updatedPoints = userData.point - 100;
  const { error: pointUpdateError } = await supabase
    .from("Users")
    .update({ point: updatedPoints })
    .eq("id", userId);

  if (pointUpdateError) {
    // Rollback booking
    await supabase
      .from("Booking")
      .delete()
      .eq("propertyId", propertyId)
      .eq("userId", userId);

    return {
      error: pointUpdateError.message,
      success: false,
      message: "Failed to deduct user points. Booking has been cancelled.",
      payload: null,
    };
  }

  // Update property booking status
  const { error: propertyUpdateError } = await supabase
    .from("Property")
    .update({ propertyBookingStatus: true })
    .eq("id", propertyId);

  if (propertyUpdateError) {
    return {
      error: propertyUpdateError.message,
      success: false,
      message: "Property status update failed. Manual correction may be required.",
      payload: null,
    };
  }

  // Log transaction in WalletTransaction
  const { error: transactionError } = await supabase
    .from("WalletTransaction")
    .insert({
      points: 100,
      type: "BOOKING",
      userId,
      reason: "For booking property",
    });

  if (transactionError) {
    return {
      error: transactionError.message,
      success: false,
      message: "Booking successful but failed to log transaction.",
      payload: null,
    };
  }
 

    await supabase.from('saveProperty').insert({
      propertyId,
      userId
    })
  return {
    error: null,
    success: true,
    message: "Property booked successfully",
    payload: {
      propertyId,
      userId,
      pointsUsed: 100,
    },
  };
};
