// app/property/[id]/page.tsx

import PropertyList from '@/components/common/PropertyList'
import { createClient } from '@/utils/supabase/ServerClient'

import { Box } from '@radix-ui/themes'

export default async function Page({ params, searchParams }: { 
  params: { id: string }, 
  searchParams: { page?: string } 
}) {
  const page = parseInt(searchParams.page || '1')
  const perPage = 10
  const from = (page - 1) * perPage
  const to = from + perPage - 1

  const supabase = await createClient()

  const { data, count } = await supabase
    .from('Property')
    .select('*', { count: 'exact' })
    .filter('propertyDivision', 'eq', params.id)
    .range(from, to)

  return (
    <Box>
      <PropertyList data={data || []} total={count || 0} page={page} perPage={perPage} />
    </Box>
  )
}
