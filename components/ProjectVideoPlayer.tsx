'use client';

import React, { useRef, useEffect } from 'react';

interface ProjectVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function ProjectVideoPlayer({
  src,
  poster,
  className = 'w-full h-full object-cover',
}: ProjectVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    return () => {
      // Whenever the user navigates away or this component unmounts, stop the video immediately
      if (video) {
        try {
          video.pause();
          video.currentTime = 0;
          video.removeAttribute('src');
          video.load();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      playsInline
      preload="metadata"
      poster={poster}
      className={className}
    />
  );
}
