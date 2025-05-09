import PropertyList from '@/components/common/PropertyList'
import { createClient } from '@/utils/supabase/ServerClient'
import { Box } from '@radix-ui/themes'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams?:Promise < { page?: string } >
}

export default async function Page({ params, searchParams }: PageProps) {
   const paramsData = await params
   const searchParamsData = await searchParams

  const page = parseInt(searchParamsData?.page || '1', 10)
  const perPage = 10
  const from = (page - 1) * perPage
  const to = from + perPage - 1

  const supabase = await createClient()

  const { data, count } = await supabase
    .from('Property')
    .select('*', { count: 'exact' })
    .eq('propertyDivision', paramsData.id)
    .range(from, to)

  return (
    <Box>
      <PropertyList data={data || []} total={count || 0} page={page} perPage={perPage} />
    </Box>
  )
}
