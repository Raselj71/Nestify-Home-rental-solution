"use client";

import {  Button, Dialog, Flex, Separator } from "@radix-ui/themes";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";




import { SearchSchema, TSearchSchema } from "@/utils/zod/SearchSchema";
import RadioCard from "../RadioCard";
import { useEffect, useState } from "react";
import { getAllDivisions, getDistrictsByDivision, getUpazilasByDistrict } from "@/utils/Address";
import LevelSelect from "../LevelSelect";
import { useRouter } from "next/navigation";

export default function OfficePropertyForm() {

    const router= useRouter()
 

    const division = getAllDivisions();
  
    const [district, setDistrict] = useState<string[]>([]);
    const [upzila, setUpzila] = useState<string[]>([]);
  

  const {
    control,
   
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TSearchSchema>({
    mode: "onTouched",

    defaultValues: {
      propertyDistrict:'',
      propertyDivision:'',
      propertyUpzila:''
     
      
    },
    resolver: zodResolver(SearchSchema),
  });

  
    const propertyDivision = watch("propertyDivision");
    const propertyDistrict = watch("propertyDistrict");
  
    useEffect(() => {
      if (propertyDivision) {
        setDistrict(getDistrictsByDivision(propertyDivision));
      }
    }, [propertyDivision]);
  
    useEffect(() => {
      if (propertyDistrict) {
        setUpzila(getUpazilasByDistrict(propertyDistrict));
      }
    }, [propertyDistrict]);

  const onSubmit = async (data: TSearchSchema) => {
     try{
        router.push(`/property/${data.propertyDivision}?district=${data.propertyDistrict}&upzila=${data.propertyUpzila}&category=${data.propertyCategory}`);
      
        
     }catch(e){
         console.log(e)
     }
    // window.location.href = "/";
    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Flex gap={'4'}>
        
          <RadioCard control={control} name="propertyCategory" label="Category" data={['Family', 'Bachelor', 'Office', 'Sublet' ,'Hostel']} error={errors.propertyCategory}/>
       </Flex> 

       <Separator size={'4'} mt={'3'}/>
       <Flex  gap={{
        initial:'2',
        lg:'4'
       }}>
    
       <LevelSelect
          size="3"
          control={control}
          data={division}
          name="propertyDivision"
          placeholder="Division"
          error={errors.propertyDivision}
          label="Division"
          required
        />
        <LevelSelect
          size="3"
          control={control}
          data={district}
          name="propertyDistrict"
          placeholder="Discrict"
          error={errors.propertyDistrict}
          label="District"
          required
        />
        <LevelSelect
          size="3"
          control={control}
          data={upzila}
          name="propertyUpzila"
          placeholder="Area"
          error={errors.propertyUpzila}
          label="Area"
          required
        />
         
       </Flex>
       
       <div className="mt-4 flex justify-end">
            <Dialog.Close className="">
        <Button type="submit" variant="solid">
          Search
        </Button>
      </Dialog.Close>
       </div>
      

    </form>
  );
}
