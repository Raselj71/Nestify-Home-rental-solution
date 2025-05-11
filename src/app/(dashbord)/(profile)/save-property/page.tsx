import PropertyList from '@/components/common/PropertyList';
import { Database } from '@/utils/Database';
import { createClient } from '@/utils/supabase/ServerClient'
import { Box, Heading } from '@radix-ui/themes';
import React from 'react'

interface PageProps {
  
  searchParams?:Promise < { page?: string } >
}

export default async function page({  searchParams }: PageProps) {
   
   const searchParamsData = await searchParams

  const page = parseInt(searchParamsData?.page || '1', 10)
  const perPage = 10
  const from = (page - 1) * perPage
  const to = from + perPage - 1
   const supabase= await createClient()
   const UserId= (await supabase.auth.getUser()).data.user?.id
   if (!UserId) {
      throw new Error("User ID is undefined");
   }
   const { data, count } = await supabase
    .from('saveProperty')
    .select(`*, propertyId(*)`, { count: 'exact' })
    .eq('userId', UserId)
    .range(from, to)

    const myData:Database['public']['Tables']['Property']['Row'][]=[]
    data?.map((item)=>{
          myData.push(item.propertyId)
    })
     

  return (
   <Box>
      <Heading className='first-letter:uppercase' my={'3'}>My Save Property</Heading>
      <PropertyList data={myData || []} total={count || 0} page={page} perPage={perPage} />
    </Box>
  )
}

