import Image from "next/image";

export default function ProductCard(
    { image, heading, description, alt }: 
    { image: string; heading: string; description: string; alt: string }
) {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-full h-80 overflow-hidden relative rounded-lg">
                <Image src={image} alt={alt} fill className="object-cover" />
            </div>
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p>{description}</p>
        </div>
    );
}