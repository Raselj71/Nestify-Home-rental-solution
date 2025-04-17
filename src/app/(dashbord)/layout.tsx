import Navbar from '@/components/Navbar'
import { Container, Theme } from '@radix-ui/themes'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    
    

     
       <Container className='p-2'>
            <Navbar/>
            {children}
       </Container>

      
         
      
  )
}

export default layout