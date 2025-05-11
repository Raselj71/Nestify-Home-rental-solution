'use server'

import { redirect } from "next/navigation"


import { revalidatePath } from "next/cache"
import { createClient } from "@/utils/supabase/ServerClient"

export const LoginAction=async({email,password}:{email:string, password:string})=>{
   const supabase= await createClient()
   

      const {  error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if(error){
        return{
          error: error.message,
          success: false,
          message: `${error.message} ` || 'Something went wrong!',
          payload: null,
        }
      }

      redirect('/')
      

}

export const SignupAction=async({email,password,name,phone}:{email:string,password:string,name:string,phone:string})=>{
  const supabase= await createClient()
   

   

     const {data:{user:supaUser},error}=await supabase.auth.signUp({email,password})
    
     if(error){
      return{
        error: error.message,
        success: false,
        message: `${error.message} ` || 'Something went wrong!',
        payload: null,
      }
     }

     if (!supaUser?.id) {
      return{
        error: null,
        success: false,
        message:'supabase id not found!',
        payload: null,
      }
     }

     const { error: insertError} = await supabase.from('Users').insert({
       fullName: name,
       email,
       phone,
       id: supaUser.id,
       role: 'USER',
       createdAt: new Date().toISOString(),
       updateAt: new Date().toISOString(),
     });

     console.log("Insert Error:",insertError)
      if(insertError){
        return{
          error: insertError.message,
          success: false,
          message: `${insertError.message} ` || 'Something went wrong!',
          payload: null,
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