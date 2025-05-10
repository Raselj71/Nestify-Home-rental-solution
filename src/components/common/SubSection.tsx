import { Button, Container, Flex, Link } from "@radix-ui/themes";

import React from "react";

import { MdFamilyRestroom } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";


function SubSection() {
  return (
      <div className="hidden lg:flex mb-4">

     
    <Container >
      <Flex justify={"center"} gap={"4"}>
        <Link href="/property/category/family">
          <Button size={"3"} variant="soft">
            <MdFamilyRestroom />
            Family
          </Button>
        </Link>

        <Link href="/property/category/bachelor">
          <Button size={"3"} variant="soft">
            <FaPerson /> Bachelor
          </Button>
        </Link>
        <Link href="/property/category/office">
          <Button size={"3"} variant="soft">
            <HiOutlineBuildingOffice2 /> Office
          </Button>
        </Link>
        <Link href="/property/category/sublet">
          <Button size={"3"} variant="soft">
            <FaHouseCircleExclamation /> Sublet
          </Button>
        </Link>
         <Link href="/property/category/hostel">
          <Button size={"3"} variant="soft">
            <LuSchool /> Hostel
          </Button>
        </Link>
      </Flex>
    </Container>
     </div>
  );
}

export default SubSection;
