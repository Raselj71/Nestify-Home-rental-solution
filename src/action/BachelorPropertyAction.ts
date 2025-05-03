'use server'


import { createClient } from "@/utils/supabase/ServerClient"
import { TBachelorSchema } from "@/utils/zod/BachelorSchema"


export const BachelorPropertyAction=async(data: TBachelorSchema, propertyCategory: string , images:string[])=>{

    const supabase= await createClient()

    const {data:User, error}= await supabase.auth.getUser()

    if (!User.user?.id) {
        return {
            error: 'User ID is undefined',
            success: false,
            message: 'Authentication error: User ID is required',
            payload: null,
        };
    }

    const { error: PropertyError } = await supabase.from('Property').insert({
        id: crypto.randomUUID(), // Generate a unique ID
        propertyAvailable: data.propertyAvailable || '', // Ensure a default value
        propertyBalcony: data.propertyBalcony,
        propertyBathroom: data.propertyBathroom,
        propertyBedroom: data.propertyBedroom,
        propertyBookingStatus: false,
        propertyCategory: propertyCategory,
        propertyDescription: data.propertyDescription,
        userId: User.user.id, // Ensure userId is defined
        propertyDivision: data.propertyDivision,
        propertyFloor: data.propertyFloor,
        propertyHouseNo: data.propertyHouseNo,
        propertyImages: images,
        propertyInclude: data.propertyInclude,
        propertyPrice: data.propertyPrice,
        propertyPriceType: data.propertyPriceType,
        propertyRoadNo: data.propertyRoadNo,
        gender: data.gender,
        propertySectorNo: data.propertySectorNo,
        propertyShortAddress: data.propertyShortAddress,
        propertySize: data.propertySize,
        propertyType: data.propertyType,
        propertyUpzila: data.propertyUpzila,
        propertyDistrict: data.propertyDistrict || '', // Add propertyDistrict with a default value
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
     })

     if(PropertyError){
        return{
            error: PropertyError.message,
            success: false,
            message: `${PropertyError.message} ` || 'Something went wrong!',
            payload: null,
        }
     }

      return{
        error: null,
        success: true,
        message:'Property added successfully!',
        payload: null,
      } 


}