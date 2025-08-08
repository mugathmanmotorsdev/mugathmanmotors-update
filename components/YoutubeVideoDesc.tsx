import Link from "next/link";

export default function YoutubeVideoDesc(
    { url, title = "YouTube video" }: 
    { url: string, title?: string }
) {
    return (
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
            <h2 className="text-lg text-slate-800">Video</h2>
            <h2 className="text-2xl font-bold my-5">{title}</h2>
            <p className="text-lg">
                watch our mission video to learn more about our company and our commitment to excellence.
            </p>
            <Link
            href={url} 
            target="_blank" 
            className="text-blue-600 my-5">Watch Video</Link>
        </div>
    )
}