
import OfficePropertyForm from "@/components/common/Form/OfficePropertyForm";


import { Box, Card, Flex, Heading } from "@radix-ui/themes";

import React from "react";

function page() {
  return (
    <Flex direction="column" className="gap-4">
      <Box>
          <Heading>Office</Heading>
      </Box>
      <Card className="p-12 w-full lg:max-w-5xl overflow-visible">
           <OfficePropertyForm/>

            </Card>

      <div></div>
    </Flex>
  );
}

export default page;
