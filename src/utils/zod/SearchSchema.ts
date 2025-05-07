import { z } from "zod";

export const SearchFormSchema = z.object({
 
  searchItem: z.string().optional(),
  
});

export type TSearchFormSchema = z.infer<typeof SearchFormSchema>;

export const SearchSchema = z.object({
 
  propertyDivision: z.string().optional(),
  propertyDistrict: z.string().optional(),
  propertyUpzila: z.string().optional(),
  propertyCategory: z.string().optional()
  
});

export type TSearchSchema = z.infer<typeof SearchSchema>;