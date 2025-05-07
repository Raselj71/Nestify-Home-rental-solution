
import { AspectRatio, Box,Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

function Property({images, category, propertyType }:{images:string[] ,category:string, propertyType:string}) {
  return (
     <Box >
      
           <Image src={images[0]} alt='title' className='max-w-sm object-cover' width={1280} height={720}>


           </Image>

        
        <Text>{category} {propertyType} Rent</Text>
        
     </Box>
  )
}

export default Property
