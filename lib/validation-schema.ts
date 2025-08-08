import * as z from "zod/v4";

export const InquirySchema = z.object({
    name: z.string("Name is required").min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
});

export const emailListSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export type InquiryInput = z.infer<typeof InquirySchema>;
export type EmailListInput = z.infer<typeof emailListSchema>;
