import * as z from "zod/v4";

export const InquirySchema = z.object({
    company: z.string().optional(),
    name: z.string("Name is required").min(3, "Name must be at least 3 characters long"),
    email: z.email("Invalid email address"),
    product: z.string("Product is required").min(1, "Product is required"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
});

export const emailListSchema = z.object({
    email: z.email("Invalid email address"),
});

export type InquiryInput = z.infer<typeof InquirySchema>;
export type EmailListInput = z.infer<typeof emailListSchema>;
