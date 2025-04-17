import { Flex, Heading,Text } from '@radix-ui/themes'

import React from 'react'
import { createClient } from '@/utils/supabase/client';
import { getTranslations } from 'next-intl/server';

 async function page() {
  const t = await getTranslations('HomePage');

 const supabase= await createClient()   



 let { data: Users, error } = await supabase
 .from('Users')
 .select('*')
         
         
         
console.log("getting user:",Users)

  return (
    <div>
       <Flex direction={'column'}>
            <Heading>{t('title')}</Heading>
            <Text> {t('body')} </Text>
       </Flex>

    </div>
  )
}

export default page