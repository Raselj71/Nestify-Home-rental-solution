"use client"



import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"




import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Button } from "@radix-ui/themes"
import address from '@bangladeshi/bangladesh-address'
import LevelSelect from "../LevelSelect"
import Levelnput from "../Levelnput"


export default function PropertyForm() {

const division = address.allDivision();
const District = address.allDistict();
const upzila=address.allUpazila()

  return (
    <form >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
           <LevelSelect title="Division*" data={division} level="Select Divison" name="division" />
           <LevelSelect title="District*" data={District} level="Select District" name="district" />
            <LevelSelect title="Upzila*" data={upzila} level="Select Upzila" name="upzila" />
      </div>

      <div>


          
      </div>


    </form>
  )
}
