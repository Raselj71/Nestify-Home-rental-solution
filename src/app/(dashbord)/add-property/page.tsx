// import AddPropertyForm from "@/components/common/Form/AddPropertyForm";
import PageHeader from "@/components/common/PageHeader";
import { categories } from "@/utils/Data";
import { Box, Card, Flex } from "@radix-ui/themes";
// Removed unused imports
import Link from "next/link";
// import { Car } from "lucide-react";
import React from "react";

function page() {



  return (
    <Box>
      <PageHeader title="Add Property" />

       <Flex direction={"column"} gap={"4"}>
       <Flex
        mt={"4"}
        justify={{
          lg: "center",
        }}
       
        
      >
        <Card className="w-full lg:w-1/2 p-6">
          <p className="">
            আপনার খালি বাসার জন্য ভাড়াটিয়া খুঁজছেন? আর দেরি না করে এখনই পোস্ট
            করুন, দ্রুত ভাড়াটিয়া পান, নিশ্চিন্তে থাকুন!
          </p>
          <p className="mt-4">👉 কেন পোস্ট করবেন?</p>

          <ul>
            <li>✅ ১. আপনার বাসা খালি থাকলে ভাড়াটিয়া খুঁজে পাবেন</li>
            <li>✅ ২. আপনার বাসার ভাড়া বাড়াতে পারবেন</li>
            <li>✅ ৩. আপনার বাসার ভাড়া কমাতে পারবেন</li>
            <li>✅ ৪. আপনার বাসার ভাড়া বাড়ানোর জন্য পোস্ট করতে পারবেন</li>
            <li>✅ ৫. আপনার বাসার ভাড়া কমানোর জন্য পোস্ট করতে পারবেন</li>
            <li>✅ ৬. আপনার বাসার ভাড়া বাড়ানোর জন্য পোস্ট করতে পারবেন</li>
          </ul>
        </Card>


       
      </Flex>
      <Flex
        mt={"4"}
        justify={{
          lg: "center",
        }}
        align={{
          lg: "center",
        }}
      >
          
          <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50">
        {categories.map((cat) => (
         <Link href={typeof cat.url === "string" ? cat.url : ""} key={cat.name}>
           
           <div
            key={cat.name}
            className="w-40 h-44 bg-white shadow-sm rounded-lg flex flex-col items-center justify-center gap-3 hover:shadow-md transition"
          >
            <div className="bg-green-100 p-4 rounded-full">{cat.icon}</div>
            <p className="text-sm font-medium text-green-600">{cat.name}</p>
          </div>
           </Link>
        ))}
      </div>

       </Flex>

       </Flex>
    </Box>
  );
}

export default page;
