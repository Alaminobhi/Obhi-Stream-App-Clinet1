const spawn = require('child_process').spawn;
const fs = require('fs');
const path = require('path');
const ffmpegPath = require('ffmpeg-static');


export const POST = async (request, {params}) => {
  console.log(request);

  try {
    const filePath = path.join(__dirname, './videos/ok.mp4');

    const url ='rtmps://live-api-s.facebook.com:443/rtmp/FB-246363178443448-0-AbzNhl9Dkqj2GHtF';
    const url1 ='FB-231542346605076-0-AbyE4AmCXITp4eKd';


     const ffmpegProcess = spawn(ffmpegPath, ['-stream_loop', '-1', '-re', '-i', filePath, 
        '-c', 'copy',
        '-f', 'flv', url,]);

        ffmpegProcess.stdout.on('data', (data) => {
              console.log("fhuhuh", data.toString());
              
            });
        ffmpegProcess.stderr.on('data', (data) => {
          
              console.log('data',data.toString());
            });
        ffmpegProcess.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
        });
        // Handle errors
        ffmpegProcess.on('error', (err) => {
            console.error(`Error spawning ffmpeg: ${err}`);
        });
        console.log('kkkkkkkk');
        return new Response(JSON.stringify({hhhh: 'huiyiuygygy'}), { status: 201 })
  
   } catch (error) {
     console.log(error);
   }

  }