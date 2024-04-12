
import * as cheerio from 'cheerio';
import randomUseragent from 'random-useragent';
import { useEffect, useState } from 'react';
import axios from 'axios';
// const rua = randomUseragent.getRandom(function (ua) {
//     return ua.browserName === 'Firefox';
//   });
//   const rua = randomUseragent.getRandom(function (ua) {
//     return parseFloat(ua.browserVersion) >= 20;
//   });
//   console.log(rua);

// const rua = randomUseragent.getRandom();

const Crex = () => {
    // const [data, setData] = useState('');
    // console.log(data);
    
    const match_url = "https://crex.live/scoreboard/L46/1CO/5th-Match/O/Q/aus-vs-ind-5th-match-world-cup-2023/live";

    let str = match_url || '';
    let live_url = str.replace('www', 'm');

    useEffect(() => {
        const url = 'https://httpbin.io/anything';
        const apikey = '9cd54e55008b3ce6e90438954c19032d4e5ae042';
        axios({
            url: 'https://api.zenrows.com/v1/',
            method: 'GET',
            params: {
                'url': url,
                'apikey': apikey,
            },
        })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
        // axios({
        //     method: 'GET',
        //     url: live_url,
        //     headers: {
        //         'User-Agent': rua
        //     }
        // }).then(function(response) {
        //   console.log(response);
        // //   const k = '';
    
        //    const k = cheerio.load(response.data);
        //    console.log(k);
    
        //     var title = k("h1.name-wrapper").eq(0).text();
        //     console.log(title);
           
        //     // var balltoball = $("div.result-box").text();
        //     // var team1 = $('div.team-name.team-1').text();
        //     // var update = $('div.final-result.m-none').text();
    
        //     // var recentballs = $('div.overs-timeline').text();
        //     // var commentary = $("div.br-comm.search-results.no-gutters.comm-left-section").text();
        //     // var partnership = $("div.partner-ship-data").eq(0).text();
        //     // var lastwicket = $("span[style='color:#333']").eq(1).text();
    
        //     // var batsman = $('div.batsmen-name').eq(0).text();
            
        //     // var batsman2 = $('div.batsmen-name').eq(1).text();
    
        //     // var bowler = $('div.batsmen-name').eq(2).text();
            
    
        // }).catch(function(error) {
        //     if (!error.response) {
        //         console.log(error);
        //     } else {
        //         console.log(error);
        //     }
        // });


        // const url = 'http://localhost:8000/cricketlive';
        // fetch({
        //     method: 'GET',
        //     url: match_url,
        //     headers: {
        //         'User-Agent': rua
        //     }
        // })
        // .then((res) => res)
        // .then(data=>setData(data))
       
      }, [])

    
    return ( <div>

    </div> );
}
 
export default Crex;