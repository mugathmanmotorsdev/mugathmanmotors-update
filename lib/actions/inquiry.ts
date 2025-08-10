"use server";
import InquiryEmailTemplate from "@/components/InquiryEmailTemplate";
import { Resend } from "resend";

const api_key = process.env.RESEND_API_KEY;

export async function Inquiry(formData: FormData) {
    //get data from form
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    //send email
    const resend = new Resend(process.env.RESEND_API_KEY);
    const inquiry = await resend.emails.send({
        from: "Mugathman <enquiry@mugathmanmotors.com>",
        to: "info@mugathmanmotors.com",
        subject: "Inquiry from " + name,
        html: InquiryEmailTemplate(name, email, message),
    });
    
    if (inquiry.error) return {
        error: "Failed to send email",
    }

    return {
        success: "Email sent successfully",
    }
}