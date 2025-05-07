import { Button, Container, Dialog, DropdownMenu, Flex,Text, IconButton, Link } from "@radix-ui/themes";
import { Building, Cross, Home } from "lucide-react";
import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { getAllDivisions } from "@/utils/Address";
import { FiX } from "react-icons/fi";
import SearchComponent from "./SearchComponent";



function SubMenu() {
  return (
    <Container className="p-2">
      <Flex justify={'between'}>
        <Flex gap={'4'} align={'center'}>
            <Link href="/"><Button size={'3'} variant="soft"><IoHome/> Home</Button></Link>
             <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                  <Button variant="ghost" size={'3'}>
                      <Building/> Property List <DropdownMenu.TriggerIcon />
                  </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="w-44 p-0!">

                 {
                    getAllDivisions().map((item)=>{
                        return <Link key={item} href={`property/${item}`}>
                          <DropdownMenu.Item>{item}</DropdownMenu.Item>
                        </Link> 
                              
                               

                    })
                 }

              </DropdownMenu.Content>

             </DropdownMenu.Root>
        </Flex>

            <SearchComponent/>
      </Flex>
    </Container>
  );
}

export default SubMenu;
