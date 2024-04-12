"use client"
import Image from 'next/image'
import VideoPlayer from './components/stream-components/VideoPlayer'
import Nav from './components/haders/Nav'
import CanvaCircle from './components/stream-components/CanvaCircle'
import VideoCanvasComponent from './components/stream-components/VideoCanvasComponent'
import CanvasComponent from './components/stream-components/PuppeteerCanvas'
import CanvasComponent2 from './components/stream-components/CanvasComponent'
 import WebsiteCanvasComponent from './components/stream-components/WebsiteCanvasComponent'

export default function Home() {
let urlkey = ['hhh', 'h', 'hh', 'hhhh']
 let url = 'http://localhost:8000/live/hhh.flv'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

 <h1>ghhhhhhh</h1>
{/* <CanvasComponent/> */}

{/* <CanvasComponent2/> */}
{/* <VideoCanvasComponent/> */}
{/* <CanvaCircle/> */}

<WebsiteCanvasComponent/>
      
    </main>
  )
}
