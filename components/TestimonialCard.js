import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

export default function TestimonialCard({ image, name, position, testimonil, star }) {
    return (
        <Card className="flex flex-col gap-4 rounded-3xl p-4 bg-white border-0 ">
            <CardHeader className="flex items-center gap-4">
                <div>
                    <Image src={image} alt={name} width={100} height={100} className="rounded-full w-12 h-12" />
                </div>
                <div>
                    <h1 className="text-lg font-semibold">{name}</h1>
                    <p className="text-sm">{position}</p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="my-2">
                    <p>{testimonil}</p>
                </div>
                <div className="flex gap-1 my-2">
                    { [...Array(star)].map((_, i) => (
                        <div key={i} > 
                            <Star size={16} fill="#efa510" className="text-[#efa510]"/>
                        </div>
                    )) }
                </div>
            </CardContent>
            
        </Card>
    )
}