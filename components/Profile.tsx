import Image from "next/image";

export default function Profile(
    { image, name, position }: 
    { image: string, name: string, position: string }
) {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div>
                <Image className="rounded-full w-52 h-52" src={image} alt={name} width={1000} height={1000} />
            </div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p>{position}</p>
        </div>
    );
}