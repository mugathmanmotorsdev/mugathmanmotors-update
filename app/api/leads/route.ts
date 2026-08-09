"use server";
import { NextResponse } from "next/server";

// Lead data structure matching the API documentation
interface Lead {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  organization?: string;
  product_of_interest?: string;
  message?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Generate a simple ID for leads
function generateLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate required fields
    const { full_name, email, phone } = body;

    if (!full_name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields: full_name, email, phone" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create lead object
    const lead: Lead = {
      id: generateLeadId(),
      full_name,
      email,
      phone,
      organization: body.organization || "",
      product_of_interest: body.product_of_interest || "",
      message: body.message || "",
      status: "NEW",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Here you would normally save to a database
    // For now, we'll just log it and return success
    console.log("New lead created:", lead);

    // In a real implementation, you would:
    // - Save to database
    // - Send email notification
    // - Trigger any workflows

    return NextResponse.json(lead, { status: 201 });

  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}