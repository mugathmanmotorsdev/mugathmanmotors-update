import YouTubeEmbed from "./YoutubeEmbed"
import YoutubeVideoDesc from "./YoutubeVideoDesc"

export default function VideoCard(
    { videoId, title = "YouTube video", url }:
    { videoId: string, title?: string, url: string }
) {
    return (
        <section className="flex flex-col md:flex-row items-center gap-5 md:gap-10 mx-auto px-5">
            <div className="w-full md:w-1/2">
                <YouTubeEmbed videoId={videoId} title={title} />
            </div>
            <YoutubeVideoDesc url={url} title={title} />
        </section>
    )
}