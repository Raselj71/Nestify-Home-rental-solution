import { createClient } from "@/utils/supabase/ServerClient";
import { Box, Card, Flex, Grid, Separator, Text } from "@radix-ui/themes";
import { Bath, Bed, Info } from "lucide-react";
import { MdBalcony } from "react-icons/md";


import React from "react";

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
        <Flex>
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
              <Separator className="mt-2" size={'4'}/>

              <Grid gap={'3'} columns={{
                initial:'2',
                lg:'4'
              }} my={"3"}>
                <div className="flex items-center gap-2 font-medium">
                    <Bed />
                  <Text>Bedroom : {data.propertyBedroom}</Text>
                </div>
                <div className="flex   items-center gap-2 font-medium">
                    <Bath />
                  <Text>Bathroom : {data.propertyBathroom}</Text>
                </div>
                 <div className="flex items-center gap-2 font-medium">
                    <MdBalcony />

                  <Text>Balcony : {data.propertyBalcony}</Text>
                </div>
               <div className="flex align-middle gap-2 font-medium">
                  <Text>Floor : {data.propertyFloor}</Text>
                </div>
        
              </Grid>
            </Box>
          </Card>
        </Flex>
      </Box>
    </Box>
  );
}

export default page;
