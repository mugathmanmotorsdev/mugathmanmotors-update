import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProductCard({ image, heading, description }) {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <Image src={image} alt={heading} className="rounded-4xl" width={500} height={500} />
            </div>
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p>{description}</p>
            <Button variant="default" 
            size="default" 
            className="w-32 bg-[#150150] hover:bg-[#0f0150f6] rounded-full"
            asChild>
                <Link href="/contact#enquiry-form">Make an enquiry</Link>
            </Button>
        </div>
    );
}