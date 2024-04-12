"use client"

import React, { useEffect, useRef, useState } from 'react';

// import { io } from "socket.io-client";
// var socket
//   socket = io("http://localhost:3001");

const Page = () => {

  //   const total = Date.parse(new Date());
  //     // console.log(total);
  //   const seconds = Math.floor((total / 1000) % 60);
  //   const minutes = Math.floor((total / 1000 / 60) % 60);
  //   const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  //   const second = Math.floor((total / 1000) % 60);

  //   // console.log(hours, minutes, seconds);

  // const myVideo = useRef(null);
  // const [screenToCamera, setScreenToCamera] = useState(false); 
  // const [stream, setStream] = useState(null);

  //   // const [date, setDate] = useState('');
  //   // const [presente, setPresente] = useState('');
  //   // const [taka, setTaka] = useState('');
  //   // const [vara, setVara] = useState('');

  //   // const data = {date, presente, taka, vara};
   
    
  //   /* Create a reference to the video element,  
  //   which helps in storing continous video stream  
  //   irespective of multiple renders. */
  //   const screenRecording = useRef(null); 
  
  //   const [Recorder, setRecorder] = useState(null); 
  //   const [displayMedia, setDisplayMedia] = useState(null); 
  //   const startScreenRecording = async () => { 
  //       const stream = await navigator.mediaDevices.getDisplayMedia({ 
  //           audio: true, video: true
  //       }); 
  //       // socket.emit('start-stream', stream);
  //       myVideo.current.srcObject = stream;
  //       const recorder = new MediaRecorder(stream); 
  //       setRecorder(recorder); 
  //       setDisplayMedia(stream.getVideoTracks()[0]); 
  //       const screenRecordingChunks = []; 
  //       recorder.ondataavailable = (e) => { 
  //           if (e.data.size > 0) { 
  //               screenRecordingChunks.push(e.data); 
  //               // socket.emit('start-stream', e.data);
  //           } 
  //           socket.emit('start-stream', e.data);
  //       } 
  //       recorder.onstop = () => { 
  //           //onstop event of media recorder  
  //           const blob = new Blob(screenRecordingChunks, 
  //               { type: 'video/webm' }); 
  //           const url = URL.createObjectURL(blob); 
  //           screenRecording.current.src = url; 
  //           socket.emit('start-stream', blob);
  //           if (displayMedia) { 
  //               displayMedia.stop(); 
  //           } 
  //       } 
  //       //Start the recording. 
  //       recorder.start(); 
  //   } 
  //   // Style the Button 
  //   const ButtonStyle = { 
  //       backgroundColor: 'green', 
  //       color: 'white', 
  //       fontSize: '2em', 
  //   }; 
    // socket.on('start-stream', (data)=>{
    //   console.log('hiughuiyytuyguytg', data);
    // });

    const [from, setFrom] = useState('');
    const [mp3url, setMp3url] = useState('');
    const [fileurl, setFileurl1] = useState('');
    const [loop, setLoop] = useState('');
    const [url, setUrl] = useState('');
    const [key, setKey] = useState('');
    
  const rtmp = `${url}/${key}`;
  
    const data = {fileurl, loop, rtmp, from, mp3url};
    console.log(data);

    const startstream = async (event) => {
      event.preventDefault();
      try {
      let url = new URL('http://localhost:5000/livestream');
      url.search = new URLSearchParams(data);

      const response = await fetch(url);
      const data2 = await response.json();
      console.log(data2);
        if (response.ok) {
            alert('done properly');
           
            // location.reload()
        }


    }

    catch (error) {
        console.log(error)
      alert('errr properly', error); 
       
    }
      }

      
  return (
    <div className="flex flex-col mt-10 justify-center  items-center">
        <h1>Live Streaming App</h1>
        
        <label> From Live:  
        <select onChange={(e) => setFrom(e.target.value)} name={from} required>
          <option value="photo">Photo and mp3 To Live</option>
          <option value="ytvideo">YT Video To Live</option>
          <option value="filevideo">Video To Live</option>
          <option value="fbvideo">FB Video To Live</option>
          <option value="canvas">canvas Video To Live</option>
        </select>
      </label>
      <br/>

      <label>file url link:
        <input 
          onChange={(e) => setFileurl1(e.target.value)}
            type="text" 
            name={fileurl} 
            placeholder="file url link"
            required
          />
        </label>
        <br/>

        <label>mp3 file link:
          <input
              type="text" 
              name={mp3url} 
              placeholder="mp3url file link"
              onChange={(e) => setMp3url(e.target.value)}
            />
          </label>
          <br/>

        <label> Loops:
          <select onChange={(e) => setLoop(e.target.value)} name={loop} required>
            <option value="1">No Loop</option>
            <option value="2">Loop 2</option>
            <option value="5">Loop 5</option>
            <option value="-1">Looping</option>
          </select>
        </label>
        <br/>
        <label> Live In:
          <select name={url} required onChange={(e) => setUrl(e.target.value)}>
          <option value="">twith</option>
            <option value="rtmps://live-api-s.facebook.com:443/rtmp">Facebook</option>
            <option value="rtmp://a.rtmp.youtube.com/live2">Youtube</option>
            <option value="rtmp://localhost:1935/live">node live</option>
          </select>
        </label>
        <br/>
        <label> Live Key:
        <input 
            type="text" 
            value={key} 
            placeholder="Live Key"
            required
            onChange={(e) => setKey(e.target.value)}
          />
        </label>
        <br/>
        <button onClick={startstream} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Live Start</button>
        {/* {isStreaming ? (
          <button onClick={stopStream}>Stop Streaming</button>
        ) : (
           <button type="submit">Go Live</button>
           )} */}
      
      {/* <p>Status: {isStreaming ? 'Streaming' : 'Not Streaming'}</p>
        <p>{statusMessage}</p> */}
            
        </div>
    );
};

export default Page;