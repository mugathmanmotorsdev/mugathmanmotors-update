import Link from "next/link";

export default function YoutubeVideoDesc(
    { url, title = "YouTube video", desc }: 
    { url: string, title?: string, desc: string }
) {
    return (
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
            <h2 className="text-lg text-slate-800">Video</h2>
            <h2 className="text-2xl font-bold my-5">{title}</h2>
            <p className="text-lg">
                {desc}
            </p>
            <Link
            href={url} 
            target="_blank" 
            className="text-blue-600 my-5">Watch Video</Link>
        </div>
    )
}