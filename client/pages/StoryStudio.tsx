import { useState } from "react";
import Header from "@/components/Header";
import VoiceRecorder from "@/components/VoiceRecorder";
import VideoUploader from "@/components/VideoUploader";
import { Send, Copy, Check } from "lucide-react";

const STORY_TEMPLATES = [
  {
    id: "template-1",
    title: "Si Maria at ang Kuwintas ng Bituin",
    text: "Mahabang, mahabang panahon na...",
  },
  {
    id: "template-2",
    title: "Ang Mahikong Lolo",
    text: "Nagsisimula ang kuwento sa isang bahay...",
  },
  {
    id: "template-3",
    title: "Babae ng Buwan",
    text: "Noong unang panahon...",
  },
];

export default function StoryStudio() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [storyTitle, setStoryTitle] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [storyText, setStoryText] = useState("");
  const [authorName, setAuthorName] = useState("Traditional Filipino Folklore");
  const [deployerName, setDeployerName] = useState("");
  const [voiceoverFile, setVoiceoverFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleStorySelect = (template: (typeof STORY_TEMPLATES)[0]) => {
    setSelectedStory(template.id);
    setStoryTitle(template.title);
    setStoryText(template.text);
  };

  const handleVoiceoverComplete = (blob: Blob) => {
    setVoiceoverFile(blob as unknown as File);
  };

  const handleVideoSelect = (file: File) => {
    setVideoFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!storyTitle.trim()) {
      alert("Please enter a story title");
      return;
    }

    if (!storyDescription.trim()) {
      alert("Please enter a story description");
      return;
    }

    if (!deployerName.trim()) {
      alert("Please enter your name (Deployed By)");
      return;
    }

    if (!voiceoverFile && !videoFile) {
      alert("Please record a voiceover or upload a sign language video");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setStoryTitle("");
        setStoryDescription("");
        setStoryText("");
        setAuthorName("Traditional Filipino Folklore");
        setDeployerName("");
        setSelectedStory(null);
        setVoiceoverFile(null);
        setVideoFile(null);
        setSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      <Header />

      {submitted && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 mx-4 sm:mx-6 lg:mx-8 mt-4 rounded">
          <p className="text-green-800 font-semibold">
            ✓ Your story has been submitted successfully! Thank you for sharing!
          </p>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            ✨ Create a New Story ✨
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl font-semibold">
            Share a Filipino bedtime story with voiceover and sign language
            interpretation. Choose from our templates or create your own.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-6xl">
          {/* Step 1: Choose Story Template */}
          <div className="mb-12 bg-white rounded-2xl border-4 border-primary p-8 shadow-lg">
            <h2 className="text-2xl font-black text-primary mb-6">
              📖 Step 1: Choose a Story
            </h2>

            {selectedStory ? (
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20 mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Selected Story:
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {storyTitle}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedStory(null);
                      setStoryTitle("");
                      setStoryText("");
                    }}
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    Change
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {STORY_TEMPLATES.map((template) => (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() => handleStorySelect(template)}
                    className="p-4 rounded-lg border-2 border-border text-left hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <h3 className="font-semibold text-foreground">
                      {template.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {template.text}
                    </p>
                  </button>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Story Title
                </label>
                <input
                  type="text"
                  value={storyTitle}
                  onChange={(e) => setStoryTitle(e.target.value)}
                  placeholder="Enter story title"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Story Description
                </label>
                <textarea
                  value={storyDescription}
                  onChange={(e) => setStoryDescription(e.target.value)}
                  placeholder="Brief description of the story"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Story Origin/Author
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g., Traditional Filipino Folklore"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    The source or original author of this story
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Deployed By (Your Name)
                  </label>
                  <input
                    type="text"
                    value={deployerName}
                    onChange={(e) => setDeployerName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Your name will be credited as the contributor
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Story Text
                </label>
                <textarea
                  value={storyText}
                  onChange={(e) => setStoryText(e.target.value)}
                  placeholder="Enter the complete story text"
                  rows={8}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Add Media */}
          <div className="mb-12 bg-white rounded-2xl border-4 border-secondary p-8 shadow-lg">
            <h2 className="text-2xl font-black text-secondary mb-6">
              🎤 Step 2: Add Media
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <VoiceRecorder onRecordingComplete={handleVoiceoverComplete} />
              <VideoUploader onVideoSelect={handleVideoSelect} />
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl border-4 border-accent p-8 shadow-lg">
            <h2 className="text-2xl font-black text-accent mb-6">
              ✨ Story Summary
            </h2>

            <div className="space-y-4">
              {storyTitle && (
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Title</p>
                    <p className="font-semibold text-foreground">
                      {storyTitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(storyTitle, "title")}
                    className="p-2 hover:bg-muted rounded transition-colors"
                  >
                    {copiedField === "title" ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              )}

              {authorName && (
                <div className="p-4 bg-white rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="font-semibold text-foreground">
                      Story Origin
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {authorName}
                  </p>
                </div>
              )}

              {deployerName && (
                <div className="p-4 bg-white rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-semibold text-foreground">
                      Deployed By
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {deployerName}
                  </p>
                </div>
              )}

              {voiceoverFile && (
                <div className="p-4 bg-white rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-semibold text-foreground">
                      Voiceover recorded
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {voiceoverFile.name}
                  </p>
                </div>
              )}

              {videoFile && (
                <div className="p-4 bg-white rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-semibold text-foreground">
                      Sign language video uploaded
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {videoFile.name}
                  </p>
                </div>
              )}

              {!voiceoverFile && !videoFile && (
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    Please add at least a voiceover or sign language video
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={() => {
                setStoryTitle("");
                setStoryDescription("");
                setStoryText("");
                setAuthorName("Traditional Filipino Folklore");
                setDeployerName("");
                setSelectedStory(null);
                setVoiceoverFile(null);
                setVideoFile(null);
              }}
              className="px-8 py-4 rounded-full border-4 border-secondary text-secondary hover:bg-secondary/10 hover:scale-105 transition-all font-black text-lg"
            >
              🗑️ Clear
            </button>
            <button
              type="submit"
              disabled={isSubmitting || (!voiceoverFile && !videoFile)}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105 transition-all font-black text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "⏳ Submitting..." : "🎉 Submit Story"}
              <Send className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
