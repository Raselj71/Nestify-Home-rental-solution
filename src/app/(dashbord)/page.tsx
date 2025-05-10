import { Box, Flex, Grid, Heading} from '@radix-ui/themes'

import React from 'react'


import { createClient } from '@/utils/supabase/ServerClient';
import Property from '@/components/common/Property';
import Slider from '@/components/common/Slider';
import SubSection from '@/components/common/SubSection';




 async function page() {
 

    const supabase= await createClient()

  const { data } = await supabase
  .from('Property')
  .select('*')
  .order('createdAt', { ascending: false }) 
  .limit(10); 
   
 const {data:familyData}=await supabase.from('Property').select('*').filter('propertyCategory','eq','family').limit(10)
 const {data:bachelorData}=await supabase.from('Property').select('*').filter('propertyCategory','eq','bachelor').limit(10)
         


  return (
    <div>
        <SubSection/>
        {/* <Flex justify={'center'} align={'center'}  mb={'4'} mt={'4'}>
                 <Button size={'3'} variant='soft' asChild>
                        <Link underline='none' href={'/dashboard/profile'}>
                            <House/>
                            Family
                        </Link>
                 </Button>
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

          <Box my={'4'}>
             <Heading my={'4'} as='h3'>Family</Heading>

             <Grid align={'center'} gap={'4'} columns={{
            initial:'2',
            md:'3',
            sm:'3',
            xl:'5',
            lg:'4'
          }}>
                 {
                  familyData?.map((item)=>{
                    return <Property key={item.id} item={item}/> 
                  })
                 }
                
          </Grid>
          </Box>
          
            <Box my={'4'}>
             <Heading my={'4'} as='h3'>Bachelor</Heading>

             <Grid align={'center'} gap={'4'} columns={{
            initial:'2',
            md:'3',
            sm:'3',
            xl:'5',
            lg:'4'
          }}>
                 {
                  bachelorData?.map((item)=>{
                    return <Property key={item.id} item={item}/> 
                  })
                 }
                
          </Grid>
          </Box>

      

      

    </div>
  )
}

export default page