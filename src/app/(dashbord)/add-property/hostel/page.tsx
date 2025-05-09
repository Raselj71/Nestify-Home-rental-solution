
import HostelPropertyForm from "@/components/common/Form/HostelPropertyForm";


import { Box, Card, Flex, Heading } from "@radix-ui/themes";

import React from "react";

function page() {
  return (
    <Flex direction="column" className="gap-4">
      <Box>
          <Heading>Hostel</Heading>
      </Box>
      <Card className="p-12 w-full lg:max-w-5xl overflow-visible">
        <HostelPropertyForm/>
      </Card>

      <div></div>
    </Flex>
  );
}

export default page;
