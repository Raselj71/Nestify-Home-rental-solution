import { z } from "zod";

export const OfficeSchema = z.object({
  propertyDivision: z.string().min(1, { message: 'Please select property division' }),
  propertyDistrict: z.string().min(1, { message: 'Please select property district' }),
  propertyUpzila: z.string().min(1, { message: 'Please select property upzila' }),
  
  propertySectorNo: z.string().optional(),
  propertyRoadNo: z.string().optional(),
  propertyHouseNo: z.string().optional(),
  propertyShortAddress: z.string().min(1, { message: 'Please enter property short address' }),

  propertyAvailable: z.string().min(1, { message: 'Please select property availability' }),

  propertyType: z.enum(['house', 'unit', 'room', 'flat', 'floor', 'apartment'], {
    errorMap: () => ({ message: 'Please select a valid property type' }),
  }),

  propertyBedroom: z.string().min(1, { message: 'Please enter the number of bedrooms' }),
  propertyBathroom: z.string().min(1, { message: 'Please enter the number of bathrooms' }),
  propertyBalcony: z.string().optional(),
  propertyFloor: z.string().optional(),
  propertySize: z.string().min(1, { message: 'Please enter property size' }).optional(),

  propertyPrice: z.string().min(1, { message: 'Please enter property price' }),

  propertyPriceType: z.enum(['daily', 'weekly', 'monthly'], {
    errorMap: () => ({ message: 'Please select a valid price type' }),
  }),

  propertyInclude: z.array(z.enum(['electricity', 'water', 'gas', 'internet'])).optional(),

  room:z.string().min(1,'office room is required'),

  propertyDescription: z.string().optional(),
});

export type TOfficeSchema = z.infer<typeof  OfficeSchema>;
