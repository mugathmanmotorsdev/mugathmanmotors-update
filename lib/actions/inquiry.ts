"use server";
import InquiryEmailTemplate from "@/components/InquiryEmailTemplate";
import { Resend } from "resend";

const api_key = process.env.RESEND_API_KEY;

// Use LEAD_API_URL for external Lead API, fallback to BASE_URL for backward compatibility
const leadApiUrl = process.env.LEAD_API_URL || process.env.API_URL || process.env.BASE_URL;

export async function Inquiry(formData: FormData) {
    // get data from form
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const company = formData.get("company") as string || undefined;
    const product = formData.get("product") as string;
    const message = formData.get("message") as string;

    // First, send to the lead API
    try {
        const leadResponse = await fetch(`${leadApiUrl}/api/leads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                full_name: name,
                email,
                phone: formData.get("phone") as string,
                organization: company,
                product_of_interest: product,
                message,
            }),
        });

        if (!leadResponse.ok) {
            const errorData = await leadResponse.json();
            console.error("Lead API error:", errorData.error);
            return {
                error: "Failed to submit inquiry. Please try again.",
            };
        }

        const leadData = await leadResponse.json();
        console.log("Lead created:", leadData.id);

        // If Resend API key is configured, also send email notification
        if (api_key) {
            const resend = new Resend(api_key);
            const inquiry = await resend.emails.send({
                from: "Mugathman <enquiry@mugathmanmotors.com>",
                to: "info@mugathmanmotors.com",
                subject: "Inquiry from " + name,
                html: InquiryEmailTemplate(name, email, message, company, product),
            });

            if (inquiry.error) {
                console.error("Resend error:", inquiry.error);
                return {
                    error: "Lead saved but failed to send email notification.",
                };
            }
        }

        return {
            success: "Your inquiry has been submitted successfully!",
            lead_id: leadData.id,
        };
    } catch (error) {
        console.error("Error submitting inquiry:", error);
        return {
            error: "Failed to submit inquiry. Please try again.",
        };
    }
}
