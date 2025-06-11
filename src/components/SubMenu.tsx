import { Button, Container, DropdownMenu, Flex } from '@radix-ui/themes';
import { Building, Heart } from 'lucide-react';
import React from 'react';

import { IoHome } from 'react-icons/io5';

import { getAllDivisions } from '@/utils/Address';

import SearchComponent from './SearchComponent';
import Link from 'next/link';

function SubMenu() {
  const divisons = getAllDivisions();

  return (
    <Container className="p-2">
      <Flex justify={'between'}>
        <Flex gap={'4'} align={'center'}>
          <Link href="/">
            <Button size={'3'} variant="soft">
              <IoHome /> Home
            </Button>
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" size={'3'}>
                <Building /> Property List <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-44 p-0!">
              {divisons.map((item) => {
                return (
                  <Link key={item} href={`/property/${item}`}>
                    <DropdownMenu.Item>{item}</DropdownMenu.Item>
                  </Link>
                );
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Button
            className="hidden! lg:flex!"
            asChild
            variant="ghost"
            size={'3'}
          >
            <Link href="/save-property">
              <Heart /> Save Property
            </Link>
          </Button>
        </Flex>

        <SearchComponent />
      </Flex>
    </Container>
  );
}

export default SubMenu;
