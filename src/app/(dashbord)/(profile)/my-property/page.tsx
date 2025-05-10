import PropertyCard from '@/components/common/PropertyCard'

import { createClient } from '@/utils/supabase/ServerClient'
import { Box, Flex, Heading } from '@radix-ui/themes'
import React from 'react'

async function page() {

   
     
    const supabase= await createClient()

      const {data:UserData}= await supabase.auth.getUser()
      

    const { data } = await supabase.from('Property').select('*').filter('userId','eq',UserData?.user?.id)
     
  return (
    <Box> 
     <Flex>
             <Heading>My Property</Heading>
    </Flex>   

    <Flex mt={'4'} gap={'4'} direction={'column'} justify={'center'}>
         
               {
                 data?.map((item)=>{
                   return <PropertyCard item={item} key={item.id}/>
                 })
               }
     </Flex>   



        
    </Box>
  )
}

export default page