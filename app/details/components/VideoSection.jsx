export default function VideoSection() {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Project Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[500px] rounded-lg"
            src="https://www.youtube.com/embed/your-video-id"
            title="Project Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  }