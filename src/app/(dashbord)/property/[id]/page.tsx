import { createClient } from '@/utils/supabase/ServerClient';
import React from 'react'

async function page(props: {
	params: Promise<{ [key: string]: string | string[] }>;
}) {

   const param= await props.params
   console.log(param)
  const supabase = await createClient();
  const {data, error}= await supabase.from('Property').select('*')

  console.log(data)
   

  return (
    <div>page</div>
  )
}

export default page