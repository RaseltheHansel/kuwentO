import { useState, useRef, useEffect } from "react";
import { Mic, Square, Play, Trash2, Download } from "lucide-react";

interface VoiceRecorderProps {
  onRecordingComplete?: (audioBlob: Blob) => void;
}

export default function VoiceRecorder({
  onRecordingComplete,
}: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string>("");
  const [duration, setDuration] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        if (onRecordingComplete) {
          onRecordingComplete(audioBlob);
        }
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setDuration(0);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Unable to access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const resetRecording = () => {
    setAudioURL("");
    setDuration(0);
    audioChunksRef.current = [];
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl p-6 border-4 border-primary shadow-lg">
        <h3 className="text-lg font-black text-primary mb-4 flex items-center gap-2">
          <Mic className="w-6 h-6" />
          🎤 Record Voiceover
        </h3>

        {!audioURL ? (
          <>
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="w-full bg-primary text-white py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 mb-3"
              >
                <Mic className="w-5 h-5" />
                Start Recording
              </button>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="animate-pulse">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-2xl font-mono font-bold text-primary">
                    {formatTime(duration)}
                  </span>
                </div>
                <button
                  onClick={stopRecording}
                  className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Square className="w-5 h-5" />
                  Stop Recording
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-border">
              <span className="text-sm font-medium text-foreground">
                Duration: {formatTime(duration)}
              </span>
              <Play className="w-4 h-4 text-primary" />
            </div>

            <audio
              ref={audioRef}
              src={audioURL}
              controls
              className="w-full rounded-lg bg-white border border-border"
            />

            <div className="flex gap-2">
              <button
                onClick={resetRecording}
                className="flex-1 bg-muted text-foreground py-2 rounded-lg hover:bg-muted/80 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
              <button
                onClick={() => {
                  if (audioRef.current) {
                    const url = audioRef.current.src;
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "voiceover.wav";
                    a.click();
                  }
                }}
                className="flex-1 bg-secondary text-white py-2 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
