"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Inquiry } from "@/lib/actions/inquiry";
import { InquiryInput, InquirySchema } from "@/lib/validation-schema";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export default function InquiryForm() {
    //this handle the form validation
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<InquiryInput>({
        resolver: zodResolver(InquirySchema),
      });

    // this function handle inquiry
    const handleInquiry = async (data: InquiryInput) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);
        
        //send data to server
        const res = await Inquiry(formData);

        //set status for ui changes
        //if there is an error
        if (res.error) toast.error(res.error);

        //else
        toast.success(res.success);
    }
    
    return (
        <section id="enquiry-form" className="container mx-auto py-12">
            <Toaster richColors position="top-center"/>
            <div className="my-5">
                <h2 className="font-bold text-2xl my-5">Get In Touch</h2>
                <p className="text-lg md:w-3/5">
                    Get in touch with us and let us know how we can help you. 
                    We are here to assist you with any questions or concerns you may have.
                </p>
            </div>
            
            <form 
            onSubmit={handleSubmit(handleInquiry)}
            className="flex flex-col gap-5"
            noValidate
            autoComplete="off">
                <Input
                {...register("name")}
                type="text"
                className="rounded-ms w-full md:w-2/3 border-2 border-gray-500"
                placeholder="Name"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                <Input
                {...register("email")}
                type="email"
                className="rounded-ms w-full md:w-2/3 border-2 border-gray-500"
                placeholder="Email"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <Textarea
                {...register("message")}
                className="rounded-ms w-full md:w-2/3 border-2 border-gray-500 resize-none"
                placeholder="Enter your message"
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                <Button 
                variant="default" 
                size="default" 
                className="bg-[#150150] hover:bg-[#0f0150f6]rounded-xl md:w-52">Submit</Button>
            </form>
        </section>
    )
}