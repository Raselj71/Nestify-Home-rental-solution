import { z } from "zod";

export const PropertySchema = z.object({
    propertyDivison: z.string().min(1, { message: 'Please select property division' }),
    propertyDistrict: z.string().min(1, { message: 'Please select property district' }),
    propertyUpzila: z.string().min(1, { message: 'Please select property upzila' }),
    propertySectorNo: z.string().optional(),
    propertyRoadNo: z.string().optional(),
    propertyHouseNo: z.string().optional(),
    propertyShortAddress: z.string().optional(),
    propertyAvailable: z.string().min(1, { message: 'Please select property available' }),
    proertyType: z.enum(['house', 'unit', 'room', 'flat', 'floor', 'apartment'], {
        errorMap: () => ({ message: 'Please select a valid property type' }),
    }),
    proertyBedroom: z.number().min(1, { message: 'Please enter the number of bedrooms' }),
    propertyBathroom: z.number().min(1, { message: 'Please enter the number of bathrooms' }),
    propertyBalcony: z.number().optional(),
    propertyFloor: z.number().optional(),
    propertySize: z.string().min(1, { message: 'Please select property size' }),
    propertyPrice: z.number().min(1, { message: 'Please select property price' }),
    propertyPriceType: z.enum(['weekly', 'monthly', 'daily'], {
        errorMap: () => ({ message: 'Please select a valid price type' }),
    }),
    propertyInclude: z
        .enum(['electricity', 'water', 'gas', 'internet'])
        .optional()
       
});

export type TpropertySchema = z.infer<typeof PropertySchema>;
