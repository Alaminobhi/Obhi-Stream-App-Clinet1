import React, { useRef, useEffect } from 'react';


const VideoCanvasComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  

  useEffect(() => {
    const displayMediaOptions = {
        video: {
          displaySurface: "browser",
        },
        audio: {
          suppressLocalAudioPlayback: false,
        },
        preferCurrentTab: false,
        selfBrowserSurface: "exclude",
        systemAudio: "include",
        surfaceSwitching: "include",
        monitorTypeSurfaces: "include",
      };
    const enableCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
        };
      } catch (err) {
        console.error(`${err.name}: ${err.message}`);
      }
    };

    enableCamera();

    // Cleanup function
    return () => {
      if (videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const captureFrame = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const intervalId = setInterval(captureFrame, 1000); // Capture frame every second

    return () => clearInterval(intervalId); // Cleanup interval
  }, []);


  return (
    <div>
      <video ref={videoRef} autoPlay controls muted />
      <canvas ref={canvasRef} width={640} height={360} />
    </div>
  );
};

export default VideoCanvasComponent;
