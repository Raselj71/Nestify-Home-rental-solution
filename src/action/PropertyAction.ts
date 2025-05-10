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