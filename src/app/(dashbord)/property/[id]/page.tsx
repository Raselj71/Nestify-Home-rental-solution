import DistrictItem from '@/components/common/DistrictItem'
import PropertyList from '@/components/common/PropertyList'
import UpzilaItem from '@/components/common/UpzilaItem'
import { getDistrictsByDivision, getUpazilasByDistrict } from '@/utils/Address'

import { createClient } from '@/utils/supabase/ServerClient'
import { Box, Flex, Heading, Separator } from '@radix-ui/themes'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams?:Promise < { page?: string ,district?:string , upzila?:string} >
}

export default async function Page({ params, searchParams }: PageProps) {
   const paramsData = await params
   const searchParamsData = await searchParams

  const page = parseInt(searchParamsData?.page || '1', 10)
  const perPage = 10
  const from = (page - 1) * perPage
  const to = from + perPage - 1

  const supabase = await createClient()

let query = supabase
  .from('Property')
  .select('*', { count: 'exact' })
  .eq('propertyDivision', paramsData.id)

if (searchParamsData?.district) {
  query = query.eq('propertyDistrict', searchParamsData.district)
}
if(searchParamsData?.upzila){
 query = query.eq('propertyUpzila', searchParamsData.upzila)
}

const { data, count } = await query.range(from, to)
   let upzila:string[]=[]
    const district=getDistrictsByDivision(paramsData.id)
     if(searchParamsData?.district){
          upzila=getUpazilasByDistrict(searchParamsData?.district)
     }
    

  return (
    <Box className=''>
       <Box>
          <Flex className={`${searchParamsData?.district? 'hidden':''}`} wrap={'wrap'} justify={'center'} gap={{
            initial:'2',
            lg:'4'
          }}>
               {
                district.map((item)=>{
                  return <DistrictItem key={item} item={item}/>
                })
               }
          </Flex>
          <Separator className='my-2' size={'4'}/>

           <Flex wrap={'wrap'} justify={'center'} gap={{
            initial:'2',
            lg:'4'
          }}>
               {
                upzila.map((item)=>{
                  return <UpzilaItem key={item} item={item}/>
                })
               }
          </Flex>

           <Separator className='my-2' size={'4'}/>
       </Box>
       <Heading className='first-letter:uppercase' my={'3'}>{paramsData.id}</Heading>
      <PropertyList data={data || []} total={count || 0} page={page} perPage={perPage} />
    </Box>
  )
}
