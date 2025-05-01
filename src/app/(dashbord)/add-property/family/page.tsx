import PropertyForm from '@/components/common/Form/AddPropertyForm'
import { Card } from '@/components/ui/card'
import { Flex } from '@radix-ui/themes'
import { LocateIcon, Navigation } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <Flex justify={'center'} mt={'4'}>
        
         <Card className='p-12 w-full lg:max-w-5xl'>
          <PropertyForm/>
            
                
            
         </Card>

         <div>
              
         </div>
    </Flex>
  )
}

export default page