import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-square w-full h-[400px] max-w-xs mx-auto mb-4 overflow-hidden shadow-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold text-black mb-1">{name}</h3>
      <p className="text-gray-600 text-sm font-medium">{role}</p>
    </div>
  );
}