// @flow 
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const LiveScore = () => {
    const [data, setData] = useState("");
    const [inputurl, setInputurl] = useState('');

if (data==="") {
    const k = '';
}
const {title,balltoball,logo,team1,score,overs, runrate,
    update,partnership,recentballs,lastwicket,commentary,
    batsman,batsmanimg,batsmanrun,bat,batsman2,batsman2img,batsmanrun2,bowler,bowlerimg,
    bowlerscore} = data;

    // useEffect(() => {
    //     const url = 'http://localhost:8000/cricketcrex';
    //     fetch(url,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: inputurl
    //     })
    //     .then((res) => res.json())
    //     .then(dat=>setData(dat))
       
    //   }, [])

    const urlinput = async (event) =>{
        event.preventDefault();
        const url = `http://localhost:8000/cricketcrex?url=${inputurl}`;
       await fetch(url)
        .then((res) => res.json())
        .then(dat=>setData(dat))
    }
      console.log(inputurl);
    return (
        <div>
            <form onSubmit={urlinput}>
                <input 
                type="text" 
                value={inputurl} 
                required
                onChange={(e) => setInputurl(e.target.value)}
                />
                <button type="submit">Cricket Live</button>
           </form>
            <div>{title}</div>
            <div>
                <div>
                    <div><img src={logo} alt={team1} height='60' width='50' /></div>
                    <div>{team1}</div>
                    <div>{score}</div>
                    <div>{overs}</div>
                </div>
                <div>
                    {balltoball}
                </div>
                <div>
                    <div>{runrate}</div>
                    <div>{update}</div>
                    <div>{team1}</div>
                </div>
            </div>
            <div>
                <div>
                    <div><img src={batsmanimg} alt={batsman} height='60' width='50' /></div>
                    <div>{batsman}</div>
                    <div>{batsmanrun}</div>
                </div>
                <div>
                    <div><img src={batsman2img} alt={batsman2} height='60' width='50' /></div>
                    <div>{batsman2}</div>
                    <div>{batsmanrun2}</div>
                </div>
                <div>
                    <div><img src={bowlerimg} alt={bowler} height='60' width='50' /></div>
                    <div>{bowler}</div>
                    <div>{bowlerscore}</div>
                </div>
            </div>
        </div>
    );
};

export default LiveScore;