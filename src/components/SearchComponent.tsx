import { Box, Button, Dialog, Flex, Heading, Inset, Text } from '@radix-ui/themes'

import React from 'react'
import { FiX } from 'react-icons/fi'
import { PiMagnifyingGlass } from 'react-icons/pi'
import Levelnput from './common/Levelnput'
import SearchForm from './common/Form/SearchForm'

function SearchComponent() {
  return (
    <Dialog.Root>
          <Dialog.Trigger>
            <Button size="3" variant="soft">
              <PiMagnifyingGlass />
            </Button>
          </Dialog.Trigger>

          <Dialog.Content>
            <Flex justify={'between'}>
                <Heading >Search</Heading>
                <Button  variant="soft" >
                <FiX />


                </Button>
            </Flex>

            <Box>
               <Flex><SearchForm/></Flex>
            </Box>
          </Dialog.Content>
        </Dialog.Root>
  )
}

export default SearchComponent
