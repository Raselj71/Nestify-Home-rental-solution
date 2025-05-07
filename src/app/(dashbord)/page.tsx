import { Box, Flex, Grid, Heading,Text } from '@radix-ui/themes'

import React from 'react'

import { getTranslations } from 'next-intl/server';
import { createClient } from '@/utils/supabase/ServerClient';
import Property from '@/components/common/Property';



 async function page() {
  const t = await getTranslations('HomePage');

    const supabase= await createClient()

    const {data,error} =await supabase.from('Property').select('*')

     console.log(data?.length)
         
         


  return (
    <div>
       {/* <Flex direction={'column'}>
            <Heading>{t('title')}</Heading>
            <Text> {t('body')} </Text>
       </Flex> */}

       <Grid gapX={'4'} columns={{
        initial:'1',
         lg:'3'
       }} gap={'4'} >
          {
            data?.map((item)=>{
              return <Property key={item.id} category={item.propertyCategory} propertyType={item.propertyType} images={item.propertyImages} title={item.propertyCategory}/>
            })
          }
            
            
       </Grid>

    </div>
  )
}

export default page