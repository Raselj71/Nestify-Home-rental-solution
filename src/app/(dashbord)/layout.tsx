import Navbar from '@/components/Navbar'
import { Container, Theme } from '@radix-ui/themes'
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
     <Theme appearance='dark' accentColor='orange'>

     
       <Container className='p-2'>
            <Navbar/>
            {children}
       </Container>

       </Theme>
         
      
  )
}

export default layout