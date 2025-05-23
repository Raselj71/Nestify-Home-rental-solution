
import Footer from "@/components/common/Footer";

import Navbar from "@/components/Navbar";
import SubMenu from "@/components/SubMenu";
import { Box, Container } from "@radix-ui/themes";

import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="">
      <div className="flex flex-col">
        <Navbar />
         <SubMenu/>
        
        <Container className="p-4 min-h-[calc(100vh-20vh)] lg:p-0">
          {/* <BreadcrumbComponent /> */}

          {children}

         
        </Container>
          <Footer/>
       
      </div>
    </Box>
  );
}

export default layout;
