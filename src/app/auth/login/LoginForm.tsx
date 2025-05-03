'use client'
import { cn } from "@/lib/utils"


import Link from "next/link"


import { Button, Card, Heading } from "@radix-ui/themes"
import Levelnput from "@/components/common/Levelnput"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema, TLoginFormSchema } from "@/utils/zod/AuthSchema"
import { useForm } from "react-hook-form"
import { LoginAction } from "@/action/LoginAction"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

    const {
      control,
      reset,
      watch,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<TLoginFormSchema>({
      mode: "onTouched",
  
      defaultValues: {
      email:'',
      password:''
      
        
        
      },
      resolver: zodResolver(LoginFormSchema),
    });
  
const onSubmit=async(data:TLoginFormSchema)=>{

  try {
    const response=  LoginAction(data)
    
     
  } catch (error) {
    console.log(error)
    
  }

}



  return (
   
      <Card >
        <div className="px-5">
          <Heading className="text-2xl">Login</Heading>
          <div className="mt-2 text-3">
            Enter your email below to login to your account
          </div>
        </div>
        <div className="px-5">
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex flex-col gap-2">
             
                 <Levelnput size="3" control={control} name="email" placeholder="email" error={errors.email} label="Email" required/>
              
             
              <div className="grid ">
                <div className="flex items-center">
                 
                   <Link  className="ml-auto inline-block text-sm underline-offset-4 hover:underline" href={'/auth/forget-password'}>Forget Passowrd</Link>
                </div>
                  <Levelnput size="3" control={control} error={errors.password} name="password" placeholder="password" label="Password"/>               
              </div>
              <Button size={'3'} type="submit" className="w-full">
                {isSubmitting? "Loading..." :"Login"}
              </Button>
            
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link className="underline underline-offset-4" href={'/auth/signup'}> Sign up</Link>
            </div>
          </form>
        </div>
      </Card>
   
  )
}