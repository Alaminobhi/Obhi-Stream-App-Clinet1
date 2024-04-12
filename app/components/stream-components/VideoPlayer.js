"use client"
import React, { useEffect, useRef } from 'react';
import flvjs from 'flv.js';

const VideoPlayer = ({url}) => {
    
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (flvjs.isSupported()) {
      const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: url,
      });

      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();

      return () => {
        flvPlayer.destroy();
      };
    }
  }, [url]);

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
