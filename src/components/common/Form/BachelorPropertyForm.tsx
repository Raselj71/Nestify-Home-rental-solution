"use client";

import { Box, Button, Flex, Grid, Text } from "@radix-ui/themes";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Gem, ImagePlus, Info, Navigation } from "lucide-react";
import LevelSelect from "../LevelSelect";

import { useEffect, useState } from "react";
import {
  getAllDivisions,
  getDistrictsByDivision,
  getUpazilasByDistrict,
} from "@/utils/Address";
import Levelnput from "../Levelnput";
import LevelTextArea from "../LevelTextArea";
import {
  months,
  propertyIncludes,
  propertyPriceTypes,
  propertyTypes,
} from "@/utils/Data";
import { MdOutlineDescription } from "react-icons/md";

import LevelCheckboxGroup from "../LevelCheckboxGroup";
import LevelImageUploader from "../LevelImageUploader";
import LabeledTextEditor from "../LevelTextEditor";
import { uploadImagesAndGetUrls } from "@/action/FileUploader";

import { enqueueSnackbar } from "notistack";
import { BachelorSchema, TBachelorSchema } from "@/utils/zod/BachelorSchema";
import { BachelorPropertyAction } from "@/action/BachelorPropertyAction";

export default function PropertyForm() {
  const division = getAllDivisions();

  const [district, setDistrict] = useState<string[]>([]);
  const [upzila, setUpzila] = useState<string[]>([]);

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
     propertyAvailable:'',
     propertyType:'house',
     propertyPrice:'',
     propertyPriceType:'monthly',
     propertyRoadNo:'',
     propertyHouseNo:'',
     propertyBalcony:'',
     propertyFloor:'',
     propertySize:'1',
     propertyBathroom:'1',
     propertyBedroom:'1',
     propertyDescription:'',
     propertyDistrict:'',
     propertyDivision:'',
     propertySectorNo:'',
     propertyShortAddress:'',
     propertyUpzila:''
    
      
      
    },
    resolver: zodResolver(BachelorSchema),
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

  const onSubmit = async (data: TBachelorSchema) => {
     try{
        const url= await uploadImagesAndGetUrls(images)

       const response = await BachelorPropertyAction(data,'house',url)
        

        if(response.success){
          enqueueSnackbar(response.message,{
            anchorOrigin:{
              vertical:'bottom',
              horizontal:'right'
            },
            variant:'success'
          })
           setImages([])
          reset()
        }else{
           enqueueSnackbar(response.message,{
            anchorOrigin:{
              vertical:'bottom',
              horizontal:'right'
            },
            variant:'error'
          })
        }
     }catch(e){
         console.log(e)
     }
    // window.location.href = "/";
    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Box my="6">
        <Flex
          gap={"4"}
          align={"center"}
          className=" text-accent-10 font-medium"
        >
          <Navigation /> <Text>Location information</Text>
        </Flex>
      </Box>
      <Grid
        gap={{
          initial: "3",
          lg: "4",
        }}
        columns={{
          initial: "2",
          lg: "3",
        }}
      >
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
        <Levelnput
          size="3"
          control={control}
          name="propertySectorNo"
          placeholder="Sector"
          error={errors.propertySectorNo}
          label="Sector"
        />
        <Levelnput
          size="3"
          control={control}
          name="propertyRoadNo"
          placeholder="Road"
          error={errors.propertyRoadNo}
          label="Road"
        />
        <Levelnput
          size="3"
          control={control}
          name="propertyHouseNo"
          placeholder="House"
          error={errors.propertyHouseNo}
          label="House"
        />
        <Box
          gridColumn={{
            initial: "1/3",
            lg: "1/4",
          }}
        >
          <LevelTextArea
            required
            size="3"
            control={control}
            name="propertyShortAddress"
            placeholder="Short Address"
            error={errors.propertyShortAddress}
            label="Short Address"
          />
        </Box>
      </Grid>

      <Box my="6">
        <Flex
          gap={"4"}
          align={"center"}
          className=" text-accent-10 font-medium"
        >
          <Info /> <Text>Basic information</Text>
        </Flex>
      </Box>
      <Grid
        gap={{
          initial: "3",
          lg: "4",
        }}
        columns={{
          initial: "2",
          lg: "3",
        }}
      >
        <LevelSelect
          size="3"
          control={control}
          data={months}
          name="propertyAvailable"
          placeholder="Select Month"
          error={errors.propertyAvailable}
          label="Available From"
          required
        />
        <LevelSelect
          size="3"
          control={control}
          data={propertyTypes}
          name="propertyType"
          placeholder="Property Type"
          error={errors.propertyType}
          label="Property Type"
          required
        />
        <Levelnput
          size="3"
          type="number"
          control={control}
          name="propertyBedroom"
          placeholder="Bedroom"
          error={errors.propertyBedroom}
          label="Bedroom"
          required
        />
        <Levelnput
          size="3"
          type="number"
          control={control}
          name="propertyBathroom"
          placeholder="Bathroom"
          error={errors.propertyBathroom}
          label="Bathroom"
          required
        />
        <Levelnput
          size="3"
          type="number"
          control={control}
          name="propertyBalcony"
          placeholder="Balcony"
          error={errors.propertyBalcony}
          label="Balcony"
          required
        />
        <Levelnput
          size="3"
          type="number"
          control={control}
          name="propertyFloor"
          placeholder="Floor"
          error={errors.propertyFloor}
          label="Floor"
          required
        />

        <LevelSelect size="3" control={control} name="gender" data={['Male', 'Female']} label="Gender" placeholder="gender" required />
        <Levelnput
          size="3"
          type="number"
          control={control}
          name="propertySize"
          placeholder="Size"
          error={errors.propertySize}
          label="Size"
        />
      </Grid>

      <Box my="6">
        <Flex
          gap={"4"}
          align={"center"}
          className=" text-accent-10 font-medium"
        >
          <Gem /> <Text>Price</Text>
        </Flex>
      </Box>

      <Grid
        gap={{
          initial: "3",
          lg: "4",
        }}
        columns={"2"}
      >
        <Levelnput
          size="3"
          control={control}
          placeholder="Price"
          name="propertyPrice"
          type="number"
          error={errors.propertyPrice}
          label="Price"
          required
        />
        <LevelSelect
          size="3"
          control={control}
          data={propertyPriceTypes}
          name="propertyPriceType"
          placeholder="Price for"
          error={errors.propertyPriceType}
          label="Price for"
          required
        />
      </Grid>

      <Box my={"6"}>
        <LevelCheckboxGroup
          control={control}
          name="propertyInclude"
          error={errors.propertyInclude}
          data={propertyIncludes}
          label="Price included with"
        />
      </Box>

      <Box my="6">
        <Flex
          gap={"4"}
          align={"center"}
          className=" text-accent-10 font-medium"
        >
          <ImagePlus /> <Text>Upload Images</Text>
        </Flex>
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


      <Box my="6" >
        <Flex
          gap={"4"}
          align={"center"}
          className=" text-accent-10 my-3 font-medium"
        >
          <MdOutlineDescription  size={'24'}/> <Text>Full Description</Text>
        </Flex>


        <div >
        <LabeledTextEditor  label=""  className="mt-6 h-32" size="3" control={control} name="propertyDescription" placeholder="Write here description" error={errors.propertyDescription}/>
        </div>
      </Box>

       <Flex justify={'end'}>
             <Button type="submit" className="w-full! lg:w-fit!"> {isSubmitting ? 'Loading...' : 'Add property'}</Button> 
       </Flex>


    </form>
  );
}
