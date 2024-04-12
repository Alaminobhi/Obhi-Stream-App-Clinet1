import { useEffect, useRef } from 'react';
import getScreenMedia from 'getscreenmedia';

const ScreenStream = () => {
  const canvasRef = useRef(null);
  let mediaRecorder;
  let mediaStream;

  const startScreenCapture = async () => {
    try {
      mediaStream = await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: true,
      });
      if (!mediaStream) throw new Error('Screen capture permission denied');

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorder.ondataavailable = (event) => {
        // Send the encoded video data to an RTMP server
        // Here, you can implement the logic to stream the data
        console.log(event.data);
      };

      mediaRecorder.start();
      
      const drawScreen = () => {
        ctx.drawImage(mediaStream, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawScreen);
      };

      drawScreen();
    } catch (error) {
      console.error('Error starting screen capture:', error);
    }
  };

  // const stopScreenCapture = () => {
  //   if (mediaRecorder) {
  //     mediaRecorder.stop();
  //   }
  //   if (mediaStream) {
  //     mediaStream.getTracks().forEach(track => track.stop());
  //   }
  // };

  // useEffect(() => {
  //   startScreenCapture();

  //   return () => {
  //     stopScreenCapture();
  //   };
  // }, []);

  return (
   <div>
     <canvas ref={canvasRef} width="800" height="600" style={{ border: '1px solid black' }} />
    <button onClick={startScreenCapture}>Start Screen Capture</button>
   </div>
  );
};

export default ScreenStream;