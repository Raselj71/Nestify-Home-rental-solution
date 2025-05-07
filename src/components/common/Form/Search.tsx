"use client";

import { Box, Button, Flex, Grid, Separator } from "@radix-ui/themes";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { GoSearch } from "react-icons/go";


import { SearchSchema, TSearchSchema } from "@/utils/zod/SearchSchema";
import RadioCard from "../RadioCard";
import { useEffect, useState } from "react";
import { getAllDivisions, getDistrictsByDivision, getUpazilasByDistrict } from "@/utils/Address";
import LevelSelect from "../LevelSelect";

export default function OfficePropertyForm() {

 

    const division = getAllDivisions();
  
    const [district, setDistrict] = useState<string[]>([]);
    const [upzila, setUpzila] = useState<string[]>([]);
  

  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
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

       console.log(data)
        
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
       <Flex gap={'4'}>
    
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
       
       <Flex mt={'4'} justify={'end'}>
            <Button size={'3'}><GoSearch />
             Search</Button>
       </Flex>
      

    </form>
  );
}
