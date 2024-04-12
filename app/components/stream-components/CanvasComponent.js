import { useEffect, useRef, useState } from "react";

const WebPageViewer = () => {
    const canvasRef = useRef(null);
    const videoRef = useRef();
    const mediaRecorder = useRef()
    const stream = useRef(null)
    let liveStream

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const iframe = document.createElement('iframe');
        iframe.src = 'https://crex.live/scoreboard/OFB/1IR/10th-Match/J/K/kkr-vs-rcb-10th-match-indian-premier-league-2024/live';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.position = 'absolute';
        iframe.style.top = '12';
        iframe.style.left = '0';
        iframe.style.bottom = '10';
        iframe.style.border = '10';
        document.body.appendChild(iframe);
        

        const onload = () => {
            const { contentDocument } = iframe;
            if (!contentDocument) return;
            
            const { body } = contentDocument;
            if (!body) return;
            
            console.log(contentDocument);
            // canvas.width = 1000;
            // canvas.height = 600;
            // // ctx.drawImage(contentDocument, 0, 0);
            // ctx.drawImage(document.documentElement, 0, 0);
            

            
            document.body.removeChild(iframe);
            
        };

        iframe.addEventListener('load', onload);


        return () => {
            iframe.removeEventListener('load', onload);
        };

       

    }, []);


    const startRecording = () => {
        // socket.emit('start-stream', data);
        // Get the stream from the canvas
       liveStream = canvasRef.current.captureStream(30) // 30 FPS
       mediaRecorder.current = new MediaRecorder(liveStream, {
         mimeType: 'video/webm;codecs=h264',
         // mimeType: 'video/webm;codecs=vp8,opus',
         videoBitsPerSecond: 3 * 1024 * 1024,
       })
       mediaRecorder.current.ondataavailable = (e) => {
         // socket.current.send(e.data)
        //  socket.emit('message', e.data)
         // chunks.push(e.data)
         console.log('send data', e.data)
       }
       // Start recording, and dump data every second
       mediaRecorder.current.start(1000);
    
        
      };

    return (
        <div>
            <h1>WebPageViewer</h1>
            <div>
                 <video ref={videoRef} width="600" height="400" autoPlay controls />
            </div>

            <div>
                <canvas ref={canvasRef} />
            </div>
            <button onClick={startRecording}>Start Recording</button>
                    
        </div>
    );

};

export default WebPageViewer;