import PropertyForm from '@/components/common/Form/AddPropertyForm'
import { Card } from '@/components/ui/card'
import { LocateIcon, Navigation } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='w-full flex justify-center items-center'>
        
         <Card className='p-12'>

            <div  className='flex items-center text-green-600 gap-4'><Navigation />Location Information</div>
            <PropertyForm/>
                
            
         </Card>
    </div>
  )
}

export default page