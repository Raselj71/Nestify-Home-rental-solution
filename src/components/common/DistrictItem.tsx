'use client';
import { Button } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

function DistrictItem({ item }: { item: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedDistrict = searchParams.get('district');
  const isSelected = selectedDistrict === item;

  const hanldleClick = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('district', item.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <Button
      className={`${isSelected ? 'border-2! border-accent-10!' : ''}`}
      onClick={hanldleClick}
      variant="soft"
    >
      {item}
    </Button>
  );
}

export default DistrictItem;
