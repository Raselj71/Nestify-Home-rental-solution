"use client"



import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"




import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Button, Grid } from "@radix-ui/themes"
import address, { DivisonName } from '@bangladeshi/bangladesh-address'
import Levelnput from "../Levelnput"
import { useForm, useWatch } from "react-hook-form"
import { PropertySchema, TpropertySchema } from "@/utils/zod/PropertySchema"
import { zodResolver } from "@hookform/resolvers/zod";
import {  Navigation } from "lucide-react"
import LevelSelect from "../LevelSelect"
import { error } from "console"
import { useEffect, useState } from "react"



export default function PropertyForm() {

const division = address.allDivision();

 const[district, setDistrict] = useState([]);
 const[upzila, setUpzila] = useState([]);

 console.log(address.divisionalDataOf(DivisonName.Khulna));




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
              setDistrict(address.divisionalDataOf(propertyDivision as DivisonName))
          }
      },[propertyDivision])






  return (
    <form  className="w-full">
     
       
   
        <Grid gap={'3'} columns={{
          initial:'2',
          lg:'3'
        }}>

     
      
          <LevelSelect control={control} data={division} name="propertyDivision" placeholder="Division" error={errors.propertyDivison} label="Division" required/>
          <LevelSelect control={control} data={district} name="propertyDistrict" placeholder="Discrict" error={errors.propertyDistrict} label="District" required/>
          <LevelSelect control={control} data={upzila} name="propertyUpzila" placeholder="Area" error={errors.propertyUpzila} label="Area" required/>

          </Grid>


      
    </form>
  )
}
