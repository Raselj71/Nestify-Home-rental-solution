import { Flex, Heading,Text } from '@radix-ui/themes'

import React from 'react'

import { getTranslations } from 'next-intl/server';

 async function page() {
  const t = await getTranslations('HomePage');


         
         


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