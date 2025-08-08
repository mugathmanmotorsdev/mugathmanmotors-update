export default function YouTubeEmbed(
  { videoId, title = "YouTube video" }: 
  { videoId: string, title?: string }
) {
  return (
    <div className="aspect-video w-full max-w-3xl mx-auto">
      <iframe
        className="w-full h-full rounded-xl shadow-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
