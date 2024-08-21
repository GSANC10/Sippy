"use client"
import React, { useEffect, useRef } from 'react';

const VideoFeed = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    getMedia();

    // Cleanup function to stop the video stream
    return () => {
      if (videoRef.current?.srcObject instanceof MediaStream) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-max aspect-video w-full max-w-7xl">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="rounded-xl w-full h-full object-cover revealExpand scale-x-[-1]"
      />
    </div>
  );
};

export default VideoFeed;