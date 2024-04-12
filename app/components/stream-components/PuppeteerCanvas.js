import React, { useRef, useEffect } from 'react';

const CanvasComponent = () => {
    const canvasRef = useRef(null);
    const videoRef = useRef();

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
            
            canvas.width = 1000;
            canvas.height = 600;
            ctx.drawImage(body, 0, 0);

            const stream = canvas.captureStream();

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
              }
            document.body.removeChild(iframe);
        };

        iframe.addEventListener('load', onload);

         
        return () => {
            iframe.removeEventListener('load', onload);
        };

       
    }, []);

    return (
        <div>
            <div>
                 <video ref={videoRef} width="600" height="400" autoPlay controls />
            </div>

            <div>
                <canvas ref={canvasRef} />
            </div>
                    
        </div>
    );

};

export default CanvasComponent;
