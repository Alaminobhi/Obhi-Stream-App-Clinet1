import { useState } from 'react';
import { io } from "socket.io-client";
import { useEffect } from 'react';

const ENDPOINT = "https://obhistream-server.vercel.app/";
var socket

export const HisabNikash = () => {
//   socket = io(ENDPOINT);
//     // Connect to the Socket.io server
//   const socket = io.connect('http://localhost:8000/', {
//     transports: ['websocket'], // required when using vite      
// });
    const [date, setDate] = useState('');
    const [presente, setPresente] = useState('');
    const [taka, setTaka] = useState('');
    const [vara, setVara] = useState('');
    const [hisabs, setHisabs] = useState('');
    console.log(hisabs);

    // const data = {date, presente, taka, vara};

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `http://localhost:8000/addcrexmatchlink`;
       await fetch(url,{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(hisabs)
        })
        .then( res =>console.log('server', res))
       
        // socket.emit('add-hisab', data);
        location.reload()
        
      }

      useEffect(()=>{
        socket = io(ENDPOINT);
        socket.on('hisab', (e)=>{
          console.log(e);
        })
        
        setTimeout(()=>{
          socket.emit("hisab"); 
        },[hisabs?9999999:100])
      })

      
    //  const url = "https://obhistream-server.vercel.app/all-hisab";
     const url = "http://localhost:8000/all-hisab";
      useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
        await fetch( url )).json();
        // set state when the data received
        setHisabs(data);
      };
      dataFetch();
      }, []);
      // const result = Array.isArray(hisabs) ? hisabs.reduce((acc, curr) => acc + curr.taka, 0): 0;
      const hajira = Array.isArray(hisabs) ? hisabs.reduce((hajira, hisab) => {
        if (hisab.presente == 'P') {
          return hajira + Number(1);
          }
        if (hisab.presente == 'P2') {
          return hajira + Number(2);
          }
        if (hisab.presente == 'P.5') {
          return hajira + Number(0.50);
          }
        if (hisab.presente == 'P1.5') {
          return hajira + Number(1.50);
          }
        if (hisab.presente == 'P3') {
          return hajira + Number(3);
          }
        if (hisab.presente == 'A') {
          return hajira + Number(0);
          }
          return hajira + Number(0)}, 0): 0;
      const totalTaka = Array.isArray(hisabs) ? hisabs.reduce((totalTaka, hisab) => totalTaka + Number(hisab.taka), 0): 0;
      const totalVaraTaka = Array.isArray(hisabs) ? hisabs.reduce((totalVaraTaka, hisab) => totalVaraTaka + Number(hisab.vara), 0): 0;

    return (
    <div className="mt-5">
      <div className="p-2 m-2">

      <div className="bg-light border text-dark text-center">
      <div className="row">
        <p className="col">তারিখ</p>
        <p className="col">হাজিরা</p>
        <p className="col">টাকা</p>
        <p className="col">ভারা টাকা</p>
        <p className="col"></p>
      </div>
           {hisabs && hisabs?.map((hisab)=>(
            <>
            <div key={hisab._id} className="row">
              <p className="col">{hisab.date}</p>
              <p className="col">{hisab.presente}</p>
              <p className="col">৳ {hisab.taka}</p>
              <p className="col"> {hisab.vara}</p>
              <p className="col"></p>
            </div>
            <hr/>
            </>
        
            
           ))}

            <div className="row bg-secondary text-white">
              <p className="col">তারিখ ২০২৩</p>
              <p className="col">{hajira}</p>
              <p className="col">৳ {totalTaka}</p>
              <p className="col"> {totalVaraTaka}</p>
              <p className="col">মোট</p>
            </div>

            <div className="row">
              <p className="col"><input 
                placeholder="তারিখ"
                type="text" 
                value={date} 
                required
                onChange={(e) => setDate(e.target.value)}
                /></p>
              <p className="col"><select name={presente} placeholder="হাজিরা" required onChange={(e) => setPresente(e.target.value)}>
                <option value="A">No presente</option>
                <option value="P">Presente</option>
                <option value="P2">P2</option>
                <option value="P.5">P.5</option>
                <option value="P1.5">P1.5</option>
                <option value="P3">P3</option>
                </select></p>
              <p className="col"><input 
                placeholder="টাকা"
                type="text" 
                value={taka} 
                required
                onChange={(e) => setTaka(e.target.value)}
                /></p>
              <p className="col"><input 
                placeholder="ভারা টাকা"
                type="text" 
                value={vara} 
                required
                onChange={(e) => setVara(e.target.value)}
                /></p>
              <p className="col"><button className="btn btn-success" onClick={handleSubmit}>Add Hisab</button></p>
            </div>
    </div>
      </div>
    </div>
    );
};