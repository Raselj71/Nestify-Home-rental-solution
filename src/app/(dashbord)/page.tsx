'use client'
import {useTranslations} from 'next-intl';
import { Flex, Heading,Text } from '@radix-ui/themes'

import React from 'react'

function page() {
  const t = useTranslations('HomePage');

   

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