'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'
import { PrimeReactProvider } from 'primereact/api';
import { SnackbarProvider } from 'notistack';


function Provider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const queryClient = new QueryClient()

  return (

  


   
    <QueryClientProvider client={queryClient}>
        <PrimeReactProvider>
            {children}
            <SnackbarProvider/>
        </PrimeReactProvider>
      
     
    </QueryClientProvider>

 
  )
}

export default Provider