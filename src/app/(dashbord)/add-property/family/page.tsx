import PropertyForm from "@/components/common/Form/AddPropertyForm";

import { Box, Card, Flex, Heading } from "@radix-ui/themes";

import React from "react";

function page() {
  return (
    <Flex direction="column" className="gap-4">
      <Box>
          <Heading>Family</Heading>
      </Box>
      <Card className="p-12 w-full lg:max-w-5xl overflow-visible">
        <PropertyForm />
      </Card>

      <div></div>
    </Flex>
  );
}

export default page;
