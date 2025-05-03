import { z } from "zod";

export const LoginFormSchema = z.object({
 
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string({message:'Please enter your password'})
    .trim(),
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;


export const SignupFormSchema = z.object({
  name:z.string({message:'Please enter your name'}).trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(5, { message: "Be at least 5 characters long" })
   
    .trim(),
});

export type TSignupFormSchema = z.infer<typeof SignupFormSchema>;

