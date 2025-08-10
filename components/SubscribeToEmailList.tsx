"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleSubscribtion } from "@/lib/actions/email-list";
import { EmailListInput, emailListSchema } from "@/lib/validation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";


export default function SubscribeToEmailList() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<EmailListInput>({
      resolver: zodResolver(emailListSchema),
    });

    const subscribe = async (data: EmailListInput) => {
      const formData = new FormData();
      formData.append("email", data.email);

      const res = await handleSubscribtion(formData);

      if (!res?.active) {
        toast.error("There was an error subscribing to our email list.");
      }

      toast.success("You have successfully subscribed to our email list.");
    }
    return(
        <section className="py-12">
          <Toaster richColors position="top-center" />
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-10">Stay Updated on New Arrivals and Special Offers</h1> 
            <form 
            onSubmit={handleSubmit(subscribe)} 
            className="flex gap-10 items-start" 
            noValidate
            autoComplete="off">
              <div className="w-full lg:w-1/2">
                <Input 
                {...register("email")}
                type="email"
                className="rounded-full w-full border-2 border-[#150150]"
                placeholder="Enter your email" />
                {errors.email && <p className="text-red-500 mx-2">{errors.email.message}</p>}
              </div>
              
              <Button 
              variant="default" 
              size="default" 
              className="bg-[#150150] hover:bg-[#0f0150f6] rounded-full">Subscribe</Button>
            </form>
            
          </div>
        </section>
    )
}