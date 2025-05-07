import { z } from "zod";

export const SearchFormSchema = z.object({
 
  search: z.string().email({ message: "Please enter a messag." }).trim(),
  
});

export type TSearchFormSchema = z.infer<typeof SearchFormSchema>;