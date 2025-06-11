import { Box, Button, Container, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';
import nestifyLogo from '../../public/nestify.png';
import { cn } from '@/utils/cn';
import { Plus } from 'lucide-react';
import EnController from './EnController';
import NavUser from './NavUser';
import Link from 'next/link';

function Navbar() {
  return (
    <Box className=" border-b p-2 ">
      <Container>
        <Flex justify={'between'} align={'center'}>
          <Link href="/">
            <Image
              src={nestifyLogo}
              width={nestifyLogo.width}
              height={nestifyLogo.height}
              alt="Nestify"
              className="max-w-[150px] md:max-w-[200px]"
            />
          </Link>

          <Flex gap={'3'} align={'center'}>
            <div className="hidden lg:flex">
              <Button asChild size={'3'} variant="soft">
                <Link
                  href="/add-property"
                  className={cn('hover:no-underline no-underline')}
                >
                  <Plus /> Add Property
                </Link>
              </Button>
            </div>

            <EnController />

            <NavUser />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
