import { Box, Button, Dialog, Flex, Heading } from '@radix-ui/themes'

import React from 'react'
import { FiX } from 'react-icons/fi'
import { PiMagnifyingGlass } from 'react-icons/pi'

import Search from './common/Form/Search'

function SearchComponent() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button size="3" variant="soft">
          <PiMagnifyingGlass />
        </Button>
      </Dialog.Trigger>

      <Dialog.Content size={{
        initial:'2',
        lg:'3'
      }}>
       
        <Flex justify={'between'}>
          <Heading >Search</Heading>

          <Dialog.Close>
            <Button variant="soft" >
              <FiX />


            </Button>
          </Dialog.Close>

        </Flex>

        <Box>
         
          
           <Box>
             <Search/>
              
           </Box>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default SearchComponent
