import { z } from "zod";

export const BachelorSchema = z.object({
  propertyDivision: z.string().min(1, { message: 'Please select property division' }),
  propertyDistrict: z.string().min(1, { message: 'Please select property district' }),
  propertyType:z.string().min(1,'property type is required'),
  propertyInclude: z.array(z.enum(['electricity', 'water', 'gas', 'internet'])).optional(),
  propertyShortAddress: z.string().optional(),
  propertyfullAdress: z.string().optional(),
});   

export type TBachelorSchema = z.infer<typeof BachelorSchema>;