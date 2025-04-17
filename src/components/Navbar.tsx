import { Box, Button, Container, Flex, Link } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import nestifyLogo from "../../public/nestify.png";
import { cn } from "@/utils/cn";
import { Plus } from "lucide-react";
import EnController from "./EnController";
import NavUser from "./NavUser";

function Navbar() {
 

  return (
    <Box className="bg-white border-b p-2 ">
        <Container>
        <Flex justify={"between"} align={"center"}>
        <Link href="/">
          <Image
            src={nestifyLogo}
            width={nestifyLogo.width}
            height={nestifyLogo.height}
            alt="Nestify"
            className="max-w-[150px] md:max-w-[200px]"
          />
        </Link>

        <Flex  gap={

           "3"
        } align={"center"}>
           
          <Button asChild className={cn('hover:no-underline no-underline text-white')}  variant="soft" size={
              {
                lg:"3"
              }
          }>
              <Link href="/add" color="green" className={cn( 'hover:no-underline no-underline')}> <Plus/> Add Property</Link>
          </Button>

           <EnController/>

           <NavUser/>

        </Flex>
      </Flex>
        </Container>
    </Box>
  );
}

export default Navbar;
