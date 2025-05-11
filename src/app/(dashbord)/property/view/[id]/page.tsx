import { createClient } from "@/utils/supabase/ServerClient";
import {

  Badge,
  Box,

  Card,
  Flex,
  Grid,
  Heading,
  Separator,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import {
  Bath,
  Bed,
  Info,
  Image,
  Navigation,
  NotepadText,
  Banknote,
  Contact,

  CalendarMinus2,
} from "lucide-react";
import { MdBalcony } from "react-icons/md";
import parse from "html-react-parser";
import { CgGenderMale } from "react-icons/cg";

import React from "react";

import ImageViewSlider from "@/components/common/ImageViewSlider";
import ContactAlert from "@/components/ContactAlert";

interface PageProps {
  params: Promise<{ id: string }>;
}
async function page({ params }: PageProps) {
  const paramsData = await params;
  const supabase = await createClient();

  const { data: authData, } = await supabase.auth.getUser();

  const userId = authData?.user?.id;

  if (!userId) {
    return <div>User not authenticated</div>;
  }

  const { data, error } = await supabase
    .from("Property")
    .select(`*, Users(*)`)
    .eq("id", paramsData.id)
    .single();

  if (error || !data) {
    return <div>Failed to load property</div>;
  }

  const { data: viewData, } = await supabase
    .from("PropertyView")
    .select()
    .eq("propertyId", data.id)
    .eq("userId", userId)
    .maybeSingle(); // will return null instead of throwing if not found

  const hasViewed = !!viewData;

  console.log(hasViewed)

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
                {data.propertyBalcony?.length ?? 0 > 0 ? (
                  <div className="flex items-center gap-2 font-medium">
                    <MdBalcony />

                    <Text>Balcony : {data.propertyBalcony}</Text>
                  </div>
                ) : null}

                {data.propertyFloor?.length ?? 0 > 0 ? (
                  <div className="flex align-middle gap-2 font-medium">
                    <Text>Floor : {data.propertyFloor}</Text>
                  </div>
                ) : null}

                {data.gender?.length ?? 0 > 0 ? (
                  <div className="flex items-center gap-2 font-medium">
                    <CgGenderMale size={20} />

                    <Text>Gender : {data.gender}</Text>
                  </div>
                ) : null}

                {data.propertySeat?.length ?? 0 > 0 ? (
                  <div className="flex items-center gap-2 font-medium">
                    <CgGenderMale size={20} />

                    <Text>
                      {data.propertyType} : {data.propertySeat}
                    </Text>
                  </div>
                ) : null}
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

              <Box mt={"4"}>{parse(data.propertyDescription || "")}</Box>
            </Box>
          </Card>
          
            <Card className="p-2.5 w-full">
            <Box m={"4"}>
              <Flex
                gap={"4"}
                align="center"
                justify={"between"}
                className="text-accent-10 "
              >
                <div className="flex items-center gap-4">
                  <CalendarMinus2 />
                  <Text className="font-medium">Booking Status</Text>
                </div>
                
                 { !data.propertyBookingStatus &&<ContactAlert type="booking"  propertyId={data.id} title="Are you sure for booking?" btnText="Book now" description=" Booking this property will cost you 100 points."/>}
                
              </Flex>
              <Separator className="mt-2" size={"4"} />
            
                <Box mt={"4"}>
                  {data.propertyBookingStatus? <Badge size={'3'} color="gray">Already booked</Badge> :<Badge size={'3'} color="green">Available</Badge>}
                 
                </Box>
             
            </Box>
          </Card>
          <Card className="p-2.5 w-full">
            <Box m={"4"}>
              <Flex
                gap={"4"}
                align="center"
                justify={"between"}
                className="text-accent-10 "
              >
                <div className="flex items-center gap-4">
                  <Contact />
                  <Text className="font-medium">Contact Owner</Text>
                </div>
                
                 { !hasViewed &&<ContactAlert propertyId={data.id} btnText="Unlock"  description="Unlock all information will cost you 10 ponints" title="Are you sure" type="contact" />}
                
              </Flex>
              <Separator className="mt-2" size={"4"} />
              <Skeleton loading={!hasViewed}>
                <Box mt={"4"}>
                  <Heading>{data.Users.fullName}</Heading>
                  <Text>{data.Users.phone}</Text>
                </Box>
              </Skeleton>
            </Box>
          </Card>

          <Card className="p-2.5 w-full">
            <Box m={"4"}>
              <Flex gap={"4"} align="center" className="text-accent-10 ">
                <Banknote />
                <Text className="font-medium">Price</Text>
              </Flex>
              <Separator className="mt-2" size={"4"} />

              <Box mt={"4"}>
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
