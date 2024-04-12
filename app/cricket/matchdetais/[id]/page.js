"use client"

// import Info from "@/app/components/cricket/Info";
import Live from "/app/components/cricket/Live";
// import Scorecard from "@/app/components/cricket/Scorecard";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
var socket
  socket = io("http://localhost:3001");


export default function Matchdetails ({params}) {
    const id = Number(params.id) || 0;
    const [data, setData] = useState('');
    // console.log(data);

    useEffect(() => {
        socket.emit('cricketLive', id)
        socket.on('cricketLive', (data)=>{
            console.log(data);
            setData(data);
        })
        
    }, [id])

    return(
        <div>
            {
                data?<div><div> <Live id = {id} data = {data}/></div>
                
                </div>: <div className="text-center"> <h2>কিছুখন অপেক্ষা করুন !!!</h2> </div>
            }

        </div>
    );
};