import { createClient } from "@/utils/supabase/ServerClient";
import { Box, Card, Flex, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { Bath, Bed, Info, Image, Navigation, NotepadText, Banknote } from "lucide-react";
import { MdBalcony } from "react-icons/md";
import parse from 'html-react-parser';
import { CgGenderMale } from "react-icons/cg";


import React from "react";

import ImageViewSlider from "@/components/common/ImageViewSlider";

interface PageProps {
  params: Promise<{ id: string }>;
}
async function page({ params }: PageProps) {
  const paramsData = await params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Property")
    .select("*")
    .eq("id", paramsData.id)
    .single();

  console.log(data);

  if (error) {
    return <div>failed to load</div>;
  }

  return (
    <Box>
      <Box className="w-full lg:max-w-5xl">

        <Flex direction={"column"} gap={"4"}>
          <Heading>Property Details</Heading>
          <Card className="p-2.5 w-full">
            <Box m={"4"}>
              <Flex
                gap={"4"}
                align="center"
                className="text-accent-10 font-medium"
              >
                <Image />
                <Text>Image</Text>
              </Flex>
              <Separator className="mt-2" size={"4"} />

              <Grid gap={"3"} my={"3"}>
                <ImageViewSlider images={data.propertyImages || []} />
              </Grid>
            </Box>
          </Card>
          <Card className="p-2.5 w-full">
            <Box m={"4"}>
              <Flex
                gap={"4"}
                align="center"
                className="text-accent-10 font-medium"
              >
                <Info />
                <Text>Basic information</Text>
              </Flex>
              <Separator className="mt-2" size={"4"} />

              <Grid
                justify={"center"}
                gap={"3"}
                columns={{
                  initial: "2",
                  lg: "4",
                }}
                my={"3"}
              >
                <div className="flex items-center gap-2 font-medium">
                  <Bed />
                  <Text>Bedroom : {data.propertyBedroom}</Text>
                </div>
                <div className="flex   items-center gap-2 font-medium">
                  <Bath />
                  <Text>Bathroom : {data.propertyBathroom}</Text>
                </div>
                {
                    data.propertyBalcony?.length ?? 0 > 0 ? <div className="flex items-center gap-2 font-medium">
                  <MdBalcony />

                  <Text>Balcony : {data.propertyBalcony}</Text>
                </div>: null
                }
                

                {
                  data.propertyFloor?.length ?? 0 > 0 ?   <div className="flex align-middle gap-2 font-medium">
                  <Text>Floor : {data.propertyFloor}</Text>
                </div>:null
                }
              

                {data.gender?.length ?? 0 > 0 ? <div className="flex items-center gap-2 font-medium">
                  <CgGenderMale size={20} />

                  <Text>Gender : {data.gender}</Text>
                </div>:null}

                  {data.propertySeat?.length ?? 0 > 0 ? <div className="flex items-center gap-2 font-medium">
                  <CgGenderMale size={20} />

                  <Text>{data.propertyType} : {data.propertySeat}</Text>
                </div>:null}
              </Grid>
            </Box>
          </Card>

          <Card className="p-2.5 w-full">
            <Box m={"4"}>
              <Flex gap={"4"} align="center" className="text-accent-10 ">
                <Navigation />
                <Text className="font-medium">Location information</Text>
              </Flex>
              <Separator className="mt-2" size={"4"} />

              <Grid
                gap={"3"}
                columns={{
                  initial: "2",
                  lg: "4",
                }}
                my={"3"}
              >
                <div className="flex items-center flex-col gap-2  ">
                  <Text className="font-medium uppercase" as="p">
                    Division
                  </Text>
                  <Text>{data.propertyDivision}</Text>
                </div>
                <div className="flex items-center flex-col gap-2 ">
                  <Text className="font-medium uppercase" as="p">
                    District
                  </Text>
                  <Text>{data.propertyDistrict}</Text>
                </div>
                <div className="flex items-center flex-col gap-2 ">
                  <Text className="font-medium uppercase" as="p">
                    Area/Thana
                  </Text>
                  <Text>{data.propertyUpzila}</Text>
                </div>
                <div className="flex items-center flex-col gap-2 ">
                  <Text className="font-medium uppercase" as="p">
                    House no
                  </Text>
                  <Text>{data.propertyHouseNo}</Text>
                </div>
              </Grid>
            </Box>
          </Card>

          <Card className="p-2.5 w-full">
            <Box m={"4"}>
              <Flex gap={"4"} align="center" className="text-accent-10 ">
                <NotepadText />
                <Text className="font-medium">Summary</Text>
              </Flex>
              <Separator className="mt-2" size={"4"} />

               <Box mt={'4'}>
                   {parse(data.propertyDescription || "")}
               </Box>
            </Box>
          </Card>

           <Card className="p-2.5 w-full">
            <Box m={"4"}>
              <Flex gap={"4"} align="center" className="text-accent-10 ">
               <Banknote />
                <Text className="font-medium">Price</Text>
              </Flex>
              <Separator className="mt-2" size={"4"} />

               <Box mt={'4'}>
                   <Heading>{data.propertyPrice} BDT</Heading>
                   <Text className="font-medium">{data.propertyPriceType}</Text>
               </Box>
            </Box>
          </Card>
        </Flex>
      </Box>
    </Box>
  );
}

export default page;
