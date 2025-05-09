import { Box, Flex, Grid, Heading } from '@radix-ui/themes'

import React from 'react'


import { createClient } from '@/utils/supabase/ServerClient';
import Property from '@/components/common/Property';
import Slider from '@/components/common/Slider';



 async function page() {
 

    const supabase= await createClient()

  const { data } = await supabase
  .from('Property')
  .select('*')
  .order('createdAt', { ascending: false }) 
  .limit(10); 
   
  console.log('data',data)
         


  return (
    <div>
       {/* <Flex direction={'column'}>
            <Heading>{t('title')}</Heading>
            <Text> {t('body')} </Text>
       </Flex> */}

       <Box> 
         <Slider/>
           
       </Box>
          <Flex justify={'center'} direction={'column'} align={'center'}  mb={'4'} mt={'4'}>
              <Heading as='h2' className='text-center '>NESTIFY - HOUSE RENT SOLUTION</Heading>
              <Heading mt={'2'} as='h3'>Recent Upload</Heading>
          </Flex>

          <Grid align={'center'} gap={'4'} columns={{
            initial:'2',
            md:'3',
            sm:'3',
            xl:'5',
            lg:'4'
          }}>
                 {
                  data?.map((item)=>{
                    return <Property key={item.id} item={item}/> 
                  })
                 }
                
          </Grid>

       <Box>
        
          
          </Box> 

       {/* <Grid gapX={'4'} columns={{
        initial:'1',
         lg:'3'
       }} gap={'4'} >
          {
            data?.map((item)=>{
              return <Property key={item.id} category={item.propertyCategory} propertyType={item.propertyType} images={item.propertyImages} title={item.propertyCategory}/>
            })
          }
            
            
       </Grid> */}

    </div>
  )
}

export default page