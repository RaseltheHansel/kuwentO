import { Link } from "react-router-dom";
import { Play, Mic, Hand, Users } from "lucide-react";

interface StoryCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  hasVoiceover: boolean;
  hasSignLanguage: boolean;
  duration?: string;
  deployedBy?: string;
}

export default function StoryCard({
  id,
  title,
  description,
  image,
  hasVoiceover,
  hasSignLanguage,
  duration = "5 min",
  deployedBy,
}: StoryCardProps) {
  return (
    <Link to={`/story/${id}`}>
      <div className="group h-full rounded-2xl border-4 border-primary bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 hover:border-accent">
        {/* Image container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
            <div className="bg-gradient-to-r from-primary to-accent rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <h3 className="font-black text-lg sm:text-xl text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Deployer info */}
          {deployedBy && (
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-secondary bg-secondary/10 px-3 py-2 rounded-full w-fit">
              <Users className="w-4 h-4" />
              <span>By {deployedBy}</span>
            </div>
          )}

          {/* Features and duration */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary rounded-full">
              ⏱️ {duration}
            </span>

            {hasVoiceover && (
              <div className="flex items-center gap-1 px-3 py-1 bg-primary/20 border-2 border-primary rounded-full text-primary">
                <Mic className="w-4 h-4" />
                <span>Voice</span>
              </div>
            )}

            {hasSignLanguage && (
              <div className="flex items-center gap-1 px-3 py-1 bg-accent/20 border-2 border-accent rounded-full text-accent">
                <Hand className="w-4 h-4" />
                <span>Sign</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
