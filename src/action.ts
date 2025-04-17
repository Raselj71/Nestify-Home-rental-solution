'use server'

import { redirect } from "next/navigation"


import { revalidatePath } from "next/cache"
import { LoginFormSchema, LoginFormState, SignupFormSchema, SingupFormState } from "./utils/zod/AuthSchema"
import {  createClient } from "./utils/supabase/ServerClient"

export const LoginAction=async(state: LoginFormState, formData: FormData)=>{
   const supabase= await createClient()
    const email=formData.get('email') as string
    const password=formData.get('password') as string

    const validatedFields = LoginFormSchema.safeParse({
    
        email,
        password
      })
     
      // If any form fields are invalid, return early
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }

      const {  error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if(error){
        return{
          message: error.message
        }
      }

      redirect('/')
      

}

export const SignupAction=async(state: SingupFormState, formData: FormData)=>{
  const supabase= await createClient()
   const email=formData.get('email') as string
   const password=formData.get('password') as string
   const name= formData.get('name') as string

   const validatedFields = SignupFormSchema.safeParse({
       name,
       email,
       password
     })
    
     // If any form fields are invalid, return early
     if (!validatedFields.success) {
       return {
         errors: validatedFields.error.flatten().fieldErrors,
       }
     }

     const {data:{user:supaUser},error}=await supabase.auth.signUp({email,password})
     console.log(supaUser)
     if(error){
      return {
        message:error.message
      }
     }

     if (!supaUser?.id) {
       return {
         message: 'User ID is undefined',
       };
     }

     const { error: insertError} = await supabase.from('Users').insert({
       fullName: name,
       email,
       id: supaUser.id,
       role: 'USER',
       createdAt: new Date().toISOString(),
       updateAt: new Date().toISOString(),
     });
      if(insertError){
        return {
          message:insertError.message
        }
      } 

    redirect('/auth/login')

     

}

export const logoutAction=async()=>{

  const supabase=await createClient()
  const {error}=await supabase.auth.signOut()
  if(error){
    throw new Error(error.message)
  }
  revalidatePath('/','page')
  redirect('/auth/login')

}