'use server'

import { TPropertySchema } from "@/utils/zod/PropertySchema"
import { createClient } from "@/utils/supabase/ServerClient"


export const SubmitPropertyAction=async(data: TPropertySchema, propertyCategory: string , images:string[])=>{

    const supabase= await createClient()

    const {data:User, error}= await supabase.auth.getUser()

    const{error:PropertyError}= await supabase.from('Property').insert({
        propertyAvailable:data.propertyAvailable,
        propertyBalcony:data.propertyBalcony,
        propertyBathroom:data.propertyBathroom,
        propertyBedroom:data.propertyBedroom,
        propertyBookingStatus:false,
        propertyCategory:propertyCategory,
        propertyDescription:data.propertyDescription,
        propertyDistrict:data.propertyDistrict,
        propertyDivision:data.propertyDivision,
        propertyFloor:data.propertyFloor,
        propertyHouseNo:data.propertyHouseNo,
        propertyImages:images,
        propertyInclude:data.propertyInclude,
        propertyPrice:data.propertyPrice,
        propertyPriceType:data.propertyPriceType,
        propertyRoadNo:data.propertyRoadNo,
        userId:User.user?.id,
        propertySectorNo:data.propertySectorNo,
        propertyShortAddress:data.propertyShortAddress,
        propertySize:data.propertySize,
        propertyType:data.propertyType,
        propertyUpzila:data.propertyUpzila,
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