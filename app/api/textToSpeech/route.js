// pages/api/textToSpeech.js
import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI();
const speechFile = path.resolve("./public/speech.mp3");

export const POST = async (request) => {
  const {text, loop, url} = await request.json();

  console.log('ygeuywgduyewgruy', request.json());


  try {
      const filePath = path.join(__dirname, '/videos/ok.mp4');

      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: text,
      });
      console.log(speechFile);
      const buffer = Buffer.from(await mp3.arrayBuffer());
      await fs.promises.writeFile(speechFile, buffer);

      return new Response('Streaming started', { status: 200 })

      

  }
  catch (error) {
      console.log(error);
      return new Response("Failed to fetch data ", { status: 500 })
  }
}