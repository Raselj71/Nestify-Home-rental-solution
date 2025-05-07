import { Box, Button, Dialog, Flex, Heading, Inset, Separator, Text } from '@radix-ui/themes'

import React from 'react'
import { FiX } from 'react-icons/fi'
import { PiMagnifyingGlass } from 'react-icons/pi'
import Levelnput from './common/Levelnput'
import SearchForm from './common/Form/SearchForm'
import Search from './common/Form/Search'

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

          <Dialog.Close>
            <Button variant="soft" >
              <FiX />


            </Button>
          </Dialog.Close>

        </Flex>

        <Box>
          <Flex><SearchForm /></Flex>
          <Separator  size={'4'}/>

           <Box>
             <Search/>
              
           </Box>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default SearchComponent
