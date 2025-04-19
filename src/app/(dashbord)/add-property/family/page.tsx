import PropertyForm from '@/components/common/Form/AddPropertyForm'
import { Card } from '@/components/ui/card'
import { LocateIcon, Navigation } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='w-full flex justify-center items-center'>
        
         <Card className='p-12 w-full lg:w-2/3'>
          <PropertyForm/>
            
                
            
         </Card>

         <div>
              
         </div>
    </div>
  )
}

export default page