import { BreadcrumbComponent } from "@/components/Breadcumb";
import Navbar from "@/components/Navbar";
import { Box, Container } from "@radix-ui/themes";

import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="">
      <div className="flex flex-col gap-6">
        <Navbar />

        <Container className="p-4 lg:p-0">
          <BreadcrumbComponent />

          {children}
        </Container>
      </div>
    </Box>
  );
}

export default layout;
