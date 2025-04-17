import AddPropertyForm from '@/components/common/Form/AddPropertyForm'
import PageHeader from '@/components/common/PageHeader'
import { Box } from '@radix-ui/themes'
import React from 'react'

function page() {
  return (
    <Box>
      <PageHeader title='Add Property'  />
       
       <AddPropertyForm/>

    </Box>
  )
}

export default page