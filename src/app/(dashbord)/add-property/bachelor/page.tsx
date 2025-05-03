import PropertyForm from "@/components/common/Form/AddPropertyForm";
import BachelorPropertyForm from "@/components/common/Form/BachelorPropertyForm";
import { Card } from "@/components/ui/card";
import { Flex } from "@radix-ui/themes";
import { LocateIcon, Navigation } from "lucide-react";
import React from "react";

function page() {
  return (
    <Flex direction="column" className="gap-4">
      <Card className="p-12 w-full lg:max-w-5xl overflow-visible">
          <BachelorPropertyForm/>
      </Card>

      <div></div>
    </Flex>
  );
}

export default page;
