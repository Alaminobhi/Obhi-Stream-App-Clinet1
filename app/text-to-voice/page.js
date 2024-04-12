"use client"

import { useState } from "react"
import WebApi from "../components/texttovoice/WebApi"
import TextToSpeech from '../components/texttovoice/TextToSpeech'

  export default function Home() {
   
    const [ourText, setOurText] = useState("")
    const msg = new SpeechSynthesisUtterance()
  
    const speechHandler = (msg) => {
      msg.text = ourText
      window.speechSynthesis.speak(msg)
    }
    return (
      <div>

    <h1>React Text to Speech App</h1>
      <input
        type='text'
        value={ourText}
        placeholder='Enter Text'
        onChange={(e) => setOurText(e.target.value)}
      />
      <button onClick={() => speechHandler(msg)}>SPEAK</button>

      <div>
        <WebApi/>

        <TextToSpeech/>
      </div>
      </div>
    );
  }