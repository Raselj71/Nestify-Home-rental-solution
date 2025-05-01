"use client"






import {  Grid } from "@radix-ui/themes"
import address, { DivisonName } from '@bangladeshi/bangladesh-address'

import { useForm, useWatch } from "react-hook-form"
import { PropertySchema, TpropertySchema } from "@/utils/zod/PropertySchema"
import { zodResolver } from "@hookform/resolvers/zod";
import {  Navigation } from "lucide-react"
import LevelSelect from "../LevelSelect"
import { error } from "console"
import { useEffect, useState } from "react"
import { getDistrictsByDivision, getUpazilasByDistrict } from "@/utils/Address"



export default function PropertyForm() {

const division = address.allDivision();

 const[district, setDistrict] = useState<string[]>([]);
 const[upzila, setUpzila] = useState<string[]>([]);






 const{control,reset,watch, formState:{errors,isSubmitting}} =useForm<TpropertySchema>({
  mode:'onTouched',
  
  defaultValues:{
    proertyBedroom:0,
    proertyType:'house',
    propertyBalcony:0,
    propertyAvailable:'',
    propertyBathroom:1,
    propertyDistrict:'',
    propertyDivision:'',
    propertyFloor:0,
    propertyHouseNo:'',
    propertyInclude:'electricity',
    propertyPrice:0,
    propertyPriceType:"monthly",
    propertyRoadNo:'',
    propertySectorNo:'',
    propertySize:'',
    propertyShortAddress:'',
    propertyUpzila:''
  },
  resolver:zodResolver(PropertySchema)
 })

      const propertyDivision=watch('propertyDivision')
      const propertyDistrict=watch('propertyDistrict')



      useEffect(()=>{
          if(propertyDivision){
              setDistrict(getDistrictsByDivision(propertyDivision ))
          }
      },[propertyDivision])


      useEffect(()=>{
        if(propertyDistrict){
            setUpzila(getUpazilasByDistrict(propertyDistrict))
        }
    },[propertyDistrict])






  return (
    <form  className="w-full">
     
       
   
        <Grid gap={'3'} columns={{
          initial:'2',
          lg:'3'
        }}>

     
      
          <LevelSelect control={control} data={division} name="propertyDivision" placeholder="Division" error={errors.propertyDivision} label="Division" required/>
          <LevelSelect control={control} data={district} name="propertyDistrict" placeholder="Discrict" error={errors.propertyDistrict} label="District" required/>
          <LevelSelect control={control} data={upzila} name="propertyUpzila" placeholder="Area" error={errors.propertyUpzila} label="Area" required/>

          </Grid>


      
    </form>
  )
}
