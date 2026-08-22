import { useRef, useState } from "react";

const VIDEO_SRC = "https://sequrin.com/assets/sequrin-homepage-explainer.mp4";

/**
 * React/Lovable mirror of the production static homepage video.
 * The live GitHub Pages site is still sourced from docs/.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        /* Native controls remain available if playback does not begin immediately. */
      });
    });
  };

  return (
    <figure className={`overflow-hidden border border-border bg-surface ${className}`}>
      <div className="border-b border-border px-4 py-3">
        <p className="label-mono">Sequrin overview · 68 seconds</p>
      </div>
      <div className="relative aspect-video bg-background">
        <video
          ref={videoRef}
          className="block h-full w-full object-cover"
          poster="/assets/product/connected-claims-network.webp"
          controls={isPlaying}
          playsInline
          preload="none"
          aria-describedby="sequrin-video-caption"
          aria-label="Sequrin homepage explainer video, 68 seconds"
        >
          {isPlaying ? <source src={VIDEO_SRC} type="video/mp4" /> : null}
          <track
            kind="captions"
            src="/assets/sequrin-hero-video.vtt"
            srcLang="en"
            label="English"
            default
          />
          Your browser does not support embedded video. You can{" "}
          <a href={VIDEO_SRC}>open the Sequrin explainer video</a> instead.
        </video>

        {!isPlaying ? (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 grid place-items-center bg-background/20 transition-colors hover:bg-background/35"
            aria-label="Play the 68-second Sequrin explainer"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full border border-primary bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-6 w-6"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        ) : null}
      </div>
      <figcaption id="sequrin-video-caption" className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        See how Sequrin moves from a signal to connected investigation context. English captions included.
      </figcaption>
    </figure>
  );
}
