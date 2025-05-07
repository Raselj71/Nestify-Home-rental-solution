import { Button, Flex } from '@radix-ui/themes'
import React from 'react'
import Levelnput from '../Levelnput'
import { useForm } from 'react-hook-form'
import { SearchFormSchema, TSearchFormSchema } from '@/utils/zod/SearchSchema'
import { zodResolver } from '@hookform/resolvers/zod'

function SearchForm() {

  const {
      control,
      reset,
      watch,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<TSearchFormSchema>({
      mode: "onTouched",
  
      defaultValues: {
       
      
        
        
      },
      resolver: zodResolver(SearchFormSchema),
    });
  return (
    <form>
      <Flex >
         <Levelnput control={control} name='search' placeholder='Search Here' error={errors.search}/>
         <Button variant='outline'>Search</Button>
      </Flex>

    </form>
  )
}

export default SearchForm
