"use client";

import {  Button, Flex } from "@radix-ui/themes";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Levelnput from "../Levelnput";


import { SearchFormSchema, TSearchFormSchema } from "@/utils/zod/SearchSchema";

export default function OfficePropertyForm() {

 

  

  const {
    control,
    
    handleSubmit,
    formState: { errors, },
  } = useForm<TSearchFormSchema>({
    mode: "onTouched",

    defaultValues: {
      searchItem:''
     
      
    },
    resolver: zodResolver(SearchFormSchema),
  });

  


  const onSubmit = async (data: TSearchFormSchema) => {
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
      <Flex gap={{
        initial:'2',
        lg:'4'
      }} my="6">
        
          <Levelnput size="3" placeholder="search here" control={control} name="searchItem" error={errors.searchItem}/>
          <Button size={'3'}>Search</Button>
       </Flex> 
      

    </form>
  );
}
