"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

let activeVideo: HTMLVideoElement | null = null;

export function AmbientVideo({
  src,
  poster,
  label,
  priority = false,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  priority?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const sync = () => {
      if (
        visible &&
        !document.hidden &&
        !preference.matches &&
        !userPaused.current
      ) {
        if (!video.getAttribute("src")) video.src = src;
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.3;
        sync();
      },
      { threshold: [0, 0.3] },
    );
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    preference.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      preference.removeEventListener("change", sync);
      video.pause();
      if (activeVideo === video) activeVideo = null;
    };
  }, [src]);
  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      if (!video.getAttribute("src")) video.src = src;
      void video.play().catch(() => setPlaying(false));
    } else {
      userPaused.current = true;
      video.pause();
    }
  }
  return (
    <div className={`ambient-video ${className}`}>
      <Image
        src={poster}
        alt=""
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        priority={priority}
        className="media-cover"
      />
      <video
        ref={videoRef}
        className={`media-cover ${ready && !failed ? "video-ready" : ""}`}
        muted
        playsInline
        loop
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
        disableRemotePlayback
        onPlaying={() => {
          const video = videoRef.current;
          if (activeVideo && activeVideo !== video) activeVideo.pause();
          activeVideo = video;
          setReady(true);
          setPlaying(true);
        }}
        onPause={() => setPlaying(false)}
        onError={() => {
          setFailed(true);
          setPlaying(false);
        }}
        onVolumeChange={() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.volume = 0;
          }
        }}
      />
      {!failed && (
        <Button
          variant="ghost"
          size="icon"
          className="video-toggle"
          onClick={togglePlayback}
          aria-label={`${playing ? "Pause" : "Play"} ${label} video`}
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}
        </Button>
      )}
    </div>
  );
}
