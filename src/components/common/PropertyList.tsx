"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "./Pagination";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { Database } from "@/utils/Database";

import Property from "./Property";

type Props = {
  data: any[];
  total: number;
  page: number;
  perPage: number;
};

export default function PropertyList({ data, total, page, perPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  if (data.length === 0) {
    return (
      <Box className="h-[50vh] ">
        <Flex justify={"center"} align={"center"}>
          <Box className="text-center">
            <Text className="font-medium text-5">No Property Found!</Text>
          </Box>
        </Flex>
      </Box>
    );
  }

  return (
    <Box>
      <Grid
        align={"center"}
        gap={"4"}
        columns={{
          initial: "2",
          md: "3",
          sm: "3",
          xl: "5",
          lg: "4",
        }}
      >
        {data.map((item: Database["public"]["Tables"]["Property"]["Row"]) => {
          return <Property key={item.id} item={item} />;
        })}
      </Grid>
      <Pagination
        page={page}
        total={total}
        perPage={perPage}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}
