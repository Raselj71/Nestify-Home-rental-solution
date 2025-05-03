'use client'
import { BachelorSchema, TBachelorSchema } from '@/utils/zod/BachelorSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Levelnput from '../Levelnput';
import { Box, Button } from '@radix-ui/themes';
import LevelSelect from '../LevelSelect';
import LevelCheckboxGroup from '../LevelCheckboxGroup';
import { propertyIncludes } from '@/utils/Data';
import LabeledTextArea from '../LevelTextArea';
import LabeledTextEditor from '../LevelTextEditor';
import LevelImageUploader from '../LevelImageUploader';

function BachelorPropertyForm() {
    const [images, setImages] = useState<File[]>([]);


  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TBachelorSchema>({
    mode: "onTouched",

    defaultValues: {
      
      
    },
    resolver: zodResolver(BachelorSchema),
  });

   const onSubmit = async (data:TBachelorSchema) => {
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
    
       <Levelnput control={control} name="propertyDivision" placeholder="Division" error={errors.propertyDivision} label="Division" required />
       <Levelnput control={control} name="propertyDistrict" placeholder="Discrict" error={errors.propertyDistrict} label="District" required />
       <LevelSelect control={control} data={['House','Unit','Room','Flat','Floor','Apartment']} name="propertyType" placeholder="Property Type" error={errors.propertyType} label="Property Type" required />
        <LabeledTextArea size='3' control={control} name="propertyShortAddress" placeholder="Short Address" error={errors.propertyShortAddress} label="Short Address" />
        <LabeledTextEditor control={control} name="propertyfullAdress" placeholder="Full Address" error={errors.propertyfullAdress} label="Full Address" />
       <Box my={"6"}>
        <LevelCheckboxGroup
          control={control}
          name="propertyInclude"
          error={errors.propertyInclude}
          data={propertyIncludes}
          label="Price included with"
        />
      </Box>

      <Box>

            <LevelImageUploader
              required
              previewRatio={1280 / 720}
              width={1280}
              height={720}
              maxSize={5}
              selectedImages={images}
              setSelectedImages={setImages}
            />  
      </Box>
       <Button>Addd Bachelor</Button>
    
    </form>
  )
}

export default BachelorPropertyForm