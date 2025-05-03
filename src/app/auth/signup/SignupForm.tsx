'use client'
import { cn } from "@/lib/utils"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useActionState } from "react"
import { Button, Card, Heading } from "@radix-ui/themes"
import { useForm } from "react-hook-form"
import { SignupFormSchema, TSignupFormSchema } from "@/utils/zod/AuthSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupAction } from "@/action/LoginAction"
import Levelnput from "@/components/common/Levelnput"
import { enqueueSnackbar } from "notistack"


export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  
    const {
         control,
         setError,
         handleSubmit,
         formState: { errors, isSubmitting },
       } = useForm<TSignupFormSchema>({
         mode: "onTouched",
     
         defaultValues: {
         email:'',
         password:'',
         name:''
         
           
           
         },
         resolver: zodResolver(SignupFormSchema),
       });
     
   const onSubmit=async(data:TSignupFormSchema)=>{
   
     try {
       const response= await SignupAction(data)
       if(!response.success){
        enqueueSnackbar(response.message, {
          anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          autoHideDuration: 3000,
          variant: 'error',
        });
  
       }
       
        
     } catch (error) {
       console.log(error)
       
     }
   
   }
  return (
   
      <Card className="p-4">
        <div className="px-4">
          <Heading className="text-2xl">Signup</Heading>
          <div className="my-3">
            Enter your email below to login to your account
          </div>
        </div>
        <div className="px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
           
                <Levelnput name="name" control={control} error={errors.name} size="3" placeholder="Name" label="Full Name"/>
             
             
                <Levelnput control={control} name="email" placeholder="email" error={errors.email} label="Email" size="3"/>
              
             
              
                <Levelnput control={control} name="password" placeholder="password" error={errors.password} label="Password" size="3"/>
                
             
              <Button size={'3'} type="submit" className="w-full bg-green-700">
                {isSubmitting? "Loading..." :"Signup"}
              </Button>
            
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link className="underline underline-offset-4" href={'/auth/login'}> Login</Link>
            </div>
          </form>
        </div>
      </Card>
  
  )
}