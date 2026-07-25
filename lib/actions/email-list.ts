"use server";

type res = {
  active: boolean
}

export async function handleSubscribtion(formData: FormData): Promise<res> {
    const email = formData.get("email");

    const res = await fetch(`${process.env.ORIGIN_URL || "http://localhost:3000"}/api/email-list`, {
        method: "POST",
        body: JSON.stringify({ email }),
    });

    const data = await res.json();

    return data;
}
