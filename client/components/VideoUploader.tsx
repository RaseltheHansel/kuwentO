import { useState, useRef } from "react";
import { Hand, Upload, Trash2, Play } from "lucide-react";

interface VideoUploaderProps {
  onVideoSelect?: (file: File) => void;
}

export default function VideoUploader({ onVideoSelect }: VideoUploaderProps) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreviewURL, setVideoPreviewURL] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith("video/")) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreviewURL(url);
      if (onVideoSelect) {
        onVideoSelect(file);
      }
    } else {
      alert("Please select a valid video file");
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const resetVideo = () => {
    setVideoFile(null);
    setVideoPreviewURL("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl p-6 border-4 border-accent shadow-lg">
        <h3 className="text-lg font-black text-accent mb-4 flex items-center gap-2">
          <Hand className="w-6 h-6" />
          👋 Sign Language Video
        </h3>

        {!videoFile ? (
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-accent/30 rounded-lg p-8 text-center cursor-pointer hover:border-accent/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="bg-accent/10 rounded-full p-4">
                <Upload className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Drop video here or click to upload
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  MP4, WebM, or Ogg
                </p>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileInputChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-4">
            {videoPreviewURL && (
              <div className="relative rounded-lg overflow-hidden bg-black h-48">
                <video
                  src={videoPreviewURL}
                  controls
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 flex items-center justify-center pointer-events-none">
                  <div className="bg-primary/80 rounded-full p-3 opacity-100">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white p-4 rounded-lg border border-border">
              <p className="text-sm font-medium text-foreground truncate">
                {videoFile.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>

            <button
              onClick={resetVideo}
              className="w-full bg-muted text-foreground py-2 rounded-lg hover:bg-muted/80 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Replace Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
