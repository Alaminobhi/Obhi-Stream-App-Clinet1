import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const CanvaCircle = () => {

  const [recording, setRecording] = useState(false);
  const videoRef = useRef()
  const canvasRef = useRef(null);
  const socket = useRef();

  const mediaRecorder = useRef()
  const stream = useRef(null)
  let liveStream
  let tempStream = new MediaStream()

  const productionWsUrl = 'https://ohmystream.xyz'
  const developmentWsUrl = 'ws://localhost:3001';
  const rtmp = "rtmp://a.rtmp.youtube.com/live2/3hg3-ssh5-sgv2-htcv-0dh2";
  const streamUrlParams = `customRTMP=${rtmp}`;


  useEffect(() => {
      const canvas = canvasRef.current;
      let context = canvas.getContext("2d");


    canvas.width = 1000;
    canvas.height = 500;
    canvas.style.background = "#ff8";

    var hit_counter = 0;

class Circle {
    constructor(xpos, ypos, radius, speed, color, text) {

        this.position_x = xpos;
        this.position_y = ypos;

        this.radius = radius;

        this.speed = speed;

        this.dx = 2 * this.speed;
        this.dy = 2 * this.speed;

        this.text = text;

        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillText(this.text, this.position_x, this.position_y);
        context.textAlign = "center";
        context.textBaseline = "middle"
        context.font = "30px Arial";
        context.lineWidth = 5;
        context.arc(this.position_x, this.position_y, this.radius, 0, Math.PI * 2);
        context.stroke();
        context.closePath();
    }

    update() {

        this.draw(context);

        if ( (this.position_x + this.radius) > 1000 ) {
            this.dx = -this.dx;
            hit_counter++;
        }
        
        if ( (this.position_x - this.radius) < 0 ) {
            this.dx = -this.dx;
            hit_counter++;
        }

        if ( (this.position_y - this.radius) < 0 ) {
            this.dy = -this.dy;
            hit_counter++;
        }

        if ( (this.position_y + this.radius) > 500 ) {
            this.dy = -this.dy;
            hit_counter++;
        }

        this.position_x += this.dx;
        this.position_y += this.dy; 
        
    }
}


let getDistance = function(xpos1, ypos1, xpos2, ypos2) {
  var result = Math.sqrt(Math.pow(xpos2-xpos1, 2) + Math.pow(ypos2-ypos1, 2));
  return result;
}


let randomNumber = function(min, max) {
  var result = Math.random() * (max - min) + min;
  return result;
}


var all_circles = [];

for (var i = 0; i < 20; i++) {

  var radius = 50;
  var random_x = randomNumber(radius, (1000 - radius));
  var random_y = randomNumber(radius, (500 - radius));

  for( var a = 0; a < all_circles.length; a++) {
    if ( (getDistance(random_x, random_y, all_circles[a].xpos, all_circles[a].ypos) - radius + all_circles[a].radius < 0) ) {
      random_x = randomNumber(radius, (1000-radius));
      random_y = randomNumber(radius, (500-radius));
    }
    a = all_circles.length;
  }

  let my_circle = new Circle(random_x, random_y, radius, 2, 'Black', 'AFIA');
  all_circles.push(my_circle);
}


let updateCircle = function() {
  requestAnimationFrame(updateCircle);
  context.clearRect(0, 0, 1000, 500);

  all_circles.forEach(element => {
    element.update();
  })
}

updateCircle();

    // Get the stream from the canvas
    const stream = canvas.captureStream(60);

    console.log(stream);
    
    // // Set the stream as the video source
    // if (canvasRef.current) {
    //   canvasRef.current.srcObject = stream;
    //   // canvasRef.current.play();
    // }

    // Set the stream as the video source
    if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
  }, []);

  const recorderInit = () => {
   // Get the stream from the canvas
   liveStream = canvasRef.current.captureStream(30) // 30 FPS
   mediaRecorder.current = new MediaRecorder(liveStream, {
     mimeType: 'video/webm;codecs=h264',
     // mimeType: 'video/webm;codecs=vp8,opus',
     videoBitsPerSecond: 3 * 1024 * 1024,
   })
   mediaRecorder.current.ondataavailable = (e) => {
     // socket.current.send(e.data)
     // chunks.push(e.data)
     console.log('send data', e.data)
   }
   // Start recording, and dump data every second
   mediaRecorder.current.start(1000)

  }

  const startRecording = () => {
    // socket.current = io(developmentWsUrl, {
    //         transports: ['websocket'],
    //       })

      // socket.current.emit("stream", rtmp, (response) => {
      //   console.log(response); // "got it"
      // });
    recorderInit()
    setRecording(true);

  }

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.current.stop()
      setRecording(false);
    }
  };

    return (
        <div>
            <canvas ref={canvasRef} width="600" height="400" />
      <video ref={videoRef} width="600" height="400" autoPlay controls />

      <button label={'Share Screen'} onClick={startRecording}>
      start Recording
            </button>
        </div>
    );
};

export default CanvaCircle;