"use server";

type res = {
  active: boolean
}
export async function handleSubscribtion(formData: FormData): Promise<res> {
    "use server";
    const email = formData.get("email");

    const res = await fetch(`${process.env.ORIGIN_URL}/api/email-list`, {
        method: "POST",
        body: JSON.stringify({ email }),
    });

    const data = await res.json();

    return data;
}