"use client"



import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"




import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Button } from "@radix-ui/themes"
import address from '@bangladeshi/bangladesh-address'
import Levelnput from "../Levelnput"
import { useForm } from "react-hook-form"
import { PropertySchema, TpropertySchema } from "@/utils/zod/PropertySchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigation } from "lucide-react"
import LevelSelect from "../LevelSelect"
import { error } from "console"



export default function PropertyForm() {

const division = address.allDivision();
console.log('division',division);
const district = address.allDistict();
console.log('district',district);
const upzila=address.allUpazila()
console.log('upzila',upzila);



 const{control,reset,formState:{errors,isSubmitting}} =useForm<TpropertySchema>({
  mode:'onTouched',
  defaultValues:{
    proertyBedroom:0,
    proertyType:'house',
    propertyBalcony:0,
    propertyAvailable:'',
    propertyBathroom:1,
    propertyDistrict:'',
    propertyDivison:'',
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

  return (
    <form  className="w-full">
       <div className="flex flex-col">
       <div  className='flex items-center text-green-600 gap-4'><Navigation />Location Information</div>
       </div>

       <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <LevelSelect control={control} data={division} name="propertyDivision" placeholder="Division" error={errors.propertyDivison} label="Division" required/>
          <LevelSelect control={control} data={district} name="propertyDistrict" placeholder="Discrict" error={errors.propertyDistrict} label="District" required/>
          <LevelSelect control={control} data={upzila} name="propertyUpzila" placeholder="Area" error={errors.propertyUpzila} label="Area" required/>

       </div>


      
    </form>
  )
}
