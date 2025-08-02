import { useState } from "react";
import { X, Expand } from "lucide-react";
import { Button } from "./button";

interface InteractiveImageProps {
  imageUrl: string;
  alt: string;
  iframeSrc: string;
  className?: string;
}

export function InteractiveImage({
  imageUrl,
  alt,
  iframeSrc,
  className = "",
}: InteractiveImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full">
      {!isExpanded ? (
        <div className="relative group">
          <img
            src={imageUrl}
            alt={alt}
            className={`w-full h-64 object-cover rounded-t-lg ${className}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <Button
              onClick={() => setIsExpanded(true)}
              className="opacity-0 group-hover:opacity-100 bg-white text-ash-orange hover:bg-ash-orange hover:text-white transition-all duration-300 flex items-center gap-2"
              size="sm"
            >
              <Expand className="w-4 h-4" />
              3D View
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[500px] bg-gray-100 rounded-t-lg overflow-hidden">
          <Button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 z-10 bg-white text-ash-orange hover:bg-ash-orange hover:text-white"
            size="sm"
          >
            <X className="w-4 h-4 mr-1" />
            Close
          </Button>
          <iframe
            src={iframeSrc}
            className="w-full h-full border-0"
            allowFullScreen
            title="3D Project View"
          />
        </div>
      )}
    </div>
  );
}
