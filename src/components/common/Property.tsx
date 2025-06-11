import { Database } from '@/utils/Database';
import { Box, Text } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdTrendingUp } from 'react-icons/io';

function Property({
  item,
}: {
  item: Database['public']['Tables']['Property']['Row'];
}) {
  return (
    <Link href={`/property/view/${item.id}`} className="hover:cursor-pointer">
      <Box className="max-w-[220px] rounded-xl overflow-hidden  border hover:shadow-3 transition-all bg-white">
        <div className="relative h-[140px] w-full">
          <Image
            src={item.propertyImages?.[0] ?? '/default-image.jpg'}
            alt={item.propertyShortAddress || 'Property image'}
            fill
            className="object-cover"
          />
          {/* Optional: Top-right arrow icon */}
          <div className="absolute top-2 right-2 bg-green-10 rounded-full p-1">
            <IoMdTrendingUp className="text-white-a-10" />
          </div>
        </div>

        <div className="p-2">
          <Text truncate className="font-medium text-sm ">
            {/* {item.title || "Family House Rent"} */}
            {item.propertyCategory} {item.propertyType} Rent
          </Text>
          <Text truncate className="block text-xs  mt-1">
            Bed: {item.propertyBedroom}, Bath: {item.propertyBathroom}
          </Text>
          <Text truncate className="block text-xs  italic">
            To-let from:{' '}
            <span className="font-medium not-italic">
              {item.propertyAvailable || 'N/A'}
            </span>
          </Text>
          <Text truncate className="block text-xs font-semibold ">
            Rent : {item.propertyPrice} BDT
          </Text>
          <Text truncate className="block text-xs ">
            {item.propertyDistrict}, {item.propertyUpzila}
          </Text>
        </div>
      </Box>
    </Link>
  );
}

export default Property;
