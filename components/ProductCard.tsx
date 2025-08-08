import Image from "next/image";

export default function ProductCard({ image, heading, description }) {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <Image src={image} alt={heading} className="rounded-4xl" width={500} height={500} />
            </div>
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p>{description}</p>
        </div>
    );
}