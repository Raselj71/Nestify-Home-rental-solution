import { Container, Flex, Link } from '@radix-ui/themes'
import React from 'react'

function Footer() {
  return (
     <Container mt={'4'}>

       <Flex direction={{
        initial:'column',
        lg:'row'
       }} justify={'between'} align={'center'}>
          <p className='text-muted-foreground'>Copyright © 2025 Nestify. All rights reserved.</p>
          <Flex gap={'4'}>
            <Link className='text-muted-foreground'>Privacy Policy</Link> 
            <Link className='text-muted-foreground'>Terms of Service</Link> 
            <Link className='text-muted-foreground'>Contact Us</Link> 
          </Flex>
       </Flex>
     </Container>
  )
}

export default Footer