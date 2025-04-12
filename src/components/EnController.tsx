'use client'
import { SegmentedControl } from '@radix-ui/themes'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function EnController() {
    const[locale, setLocale]=useState('')
    const router=useRouter()


    useEffect(()=>{
        const cookielocale=document.cookie.split("; ").find((row)=>row.startsWith('MYNEXTAPP_LOCALE='))?.split("=")[1];
        console.log(cookielocale)
        if(cookielocale){
            setLocale(cookielocale)
        }else{
             const browserLocale=navigator.language.slice(0,2)
             setLocale(browserLocale)
             document.cookie=`MYNEXTAPP_LOCALE=${browserLocale}`
             router.refresh()
        }

    },[router])
    const handleChange=(value:any)=>{
       setLocale(value)
        document.cookie=`MYNEXTAPP_LOCALE=${value}`
        router.refresh()
    }
    if (!locale) return null 
  return (
    <SegmentedControl.Root defaultValue={locale} onValueChange={handleChange}  size={{
        lg:'3'
    }}>
	<SegmentedControl.Item  value="en">EN</SegmentedControl.Item>
	<SegmentedControl.Item value="bn">BN</SegmentedControl.Item>
	
</SegmentedControl.Root>
  )
}

export default EnController