'use client'
import { useAuth } from '@/hooks/useAuth'
import { Avatar, Box, Card, Flex, Heading,Text } from '@radix-ui/themes'
import { UserIcon } from 'lucide-react'
import React from 'react'

function page() {
     
   const {user}=  useAuth()
    

  return (
    <Box my={'3'}>
      <Card className='w-full max-w-xl'> 

         <Flex justify={'center'} align={'center'} direction={'column'} p={'4'}>
              <Avatar
            size={{
              initial:'2',
              lg:'3'
            }}
            radius="large"
            fallback={<UserIcon size={16} />}
            src={user?.avatar || ''}
            alt={user?.fullName ?? ''}
          />

          <Heading mt={'3'}>{user?.fullName}</Heading>
          <Text>{user?.email}</Text>
          <Text>Current Points:{user?.point}</Text>
          
         </Flex>
          

        
      </Card>
        
    </Box>
  )
}

export default page