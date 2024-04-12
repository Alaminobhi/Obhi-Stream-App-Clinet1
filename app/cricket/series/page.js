"use client"
import { useEffect, useState } from "react";
import Serieslist from "../../components/cricket/Serieslist";
import { io } from "socket.io-client";
var socket
  socket = io("http://localhost:3001");

export default function Series() {
    const id = 'hhhh';

    const [data, setData] = useState('')
    console.log(data);

    // socket.on('cricketLive', (data)=>{
    //     socket.emit('cricketLive', 'ooooo')
    //     setData(data);


    // })
        // // fetch data
        // const dataFetch = async () => {
        //     const response = await fetch(`/api/cricket/crexmatch/crex-match-details/${id.toString()}`);
        //     // console.log(response);
        //     const data = await response.json();
        //     setData(data);
        // };

        useEffect(() => {
            socket.emit('cricketLive', 'hhhh')
            socket.on('cricketLive', (data)=>{
                console.log(data);
                setData(data);
            })
            
        }, [])

        

    return (
        <div class="p-6 max-w-auto mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
            {
        data | data?.length ? data?.map(it => 
        <Serieslist
        key={it.id}
        item={it}
        ></Serieslist>
        ) : <div class="text-center"> <h2>কিছুখন অপেক্ষা করুন !!!</h2> 
        
         </div>
        }
        </div>
   );
};