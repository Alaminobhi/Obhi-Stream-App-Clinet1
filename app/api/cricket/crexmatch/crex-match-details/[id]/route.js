// import cheerio from 'cheerio';
const cheerio = require('cheerio');
const randomUseragent = require('random-useragent');

const rua = randomUseragent.getRandom();
const { default: axios } = require('axios');

export const GET = async (request, { params }) => {
    console.log(params);
    const id2 =params.id;

  

    try {
        const match_url =  'https://crex.live/series/1CO/world-cup-2023/matches';
        let str = match_url || '';
        let live_url = str.replace('www', 'm');

        const response = await axios({
            method: 'GET',
            url: live_url,
            headers: {
                'User-Agent': rua
            }
        })
        
       let $ = await cheerio.load(response.data);
        // console.log($);

        var matchs = [];
        var c = 1;

        for (let i = 0; i < 50; i++) {
            // some code
            var c = i;
            var title2 = $("h3.match-info").eq(c).text();
            title2? c = 5 : c=0;
            if(c===0){
                break;
            }
            var match = $("div.match-card-container").eq(i).html();
            let m = cheerio.load(match);
            var href = $('a.match-card-wrapper').eq(i).attr('href');
            var title = $("h3.match-info").eq(i).text();
            var logo = m('img').eq(0).prop('src');
            var logo2 = m('img').eq(1).prop('src');
            var team1 = m('span.team-name').eq(0).text();
            var team2 = m('span.team-name').eq(1).text();
            
            var score = m('span.team-score').eq(0).text();
            var score2 = m('span.team-score').eq(1).text();
            var overs = m('span.total-overs').eq(0).text();
            var overs2 = m('span.total-overs').eq(1).text();

            var stutas = m('div.result span').eq(0).text();
            var update = m('div.result span').eq(1).text();
            var stutas1 = m('div.time').eq(0).text();
            var update1 = m('div.start-text').eq(0).text();
            var id = i;
            // console.log("hhhhhhhhh", match);
            // console.log(logo,team1,score,overs, team2,score2,overs2,logo2);

            //match link make
            
            let link2 ='https://crex.live';
            let d = [];
             let t = '';

             for (let i = 0; i < href?.length; i++) {
              var g =(href[i]);
              if(g === '/'){
                d.push(t);
                t = '';
                }
               t += href[i]
             }
            
             const totalTaka = await Array.isArray(d) ? d?.reduce((totalTaka, hisab) => totalTaka + hisab): 0;
             
             const matchlink = link2 + totalTaka;

            var matchslist = {matchlink: matchlink || "", title: title || "", logo: logo || "",
            team1: team1 || "", score: score || "", overs: overs || "", team2: team2 || "", score2: score2 || "",
            overs2: overs2 || "", logo2: logo2 || "", stutas: stutas || stutas1, update: update || update1, id: id,
        } 
            matchs.push(matchslist);
            // console.log(matchs);
          }

        if (!matchs)
            return new Response("matchs not found", { status: 404 })
        if (params.id === 'hhhh') {
            return new Response(JSON.stringify(matchs), { status: 200 }) 
        }


        const tt = await matchs && matchs?.find((d) =>d.id === Number(params.id));
        
        // console.log(tt);
        const livelink = tt?.matchlink +'/' + 'live';
        console.log(livelink);
        const scorecardlink =tt?.matchlink + '/' + 'scorecard';
        const infolink =tt?.matchlink + '/' + 'info';

        try {
        let str = livelink || '';
        let live_url = str.replace('www', 'm');
        const response = await axios({
            method: 'GET',
            url: live_url,
            headers: {
                'User-Agent': rua
            }
        })
        
       let $ = await cheerio.load(response.data);
    //   console.log(response.data);

        var title = $("h1.name-wrapper").eq(0).text();
       
        var balltoball = $("div.result-box").text();

        var logo = $('img').eq(0).prop('src');
        console.log(logo);
        var team1 = $('div.team-name.team-1').text();
        var score = $('span').eq(3).text();
        var overs = $('span').eq(4).text();

        var runrate = $('div.team-run-rate').text();
        var update = $('div.final-result.m-none').text();

        var recentballs = $('div.overs-timeline').text();
        var commentary = $("div.br-comm.search-results.no-gutters.comm-left-section").text();
        var partnership = $("div.partner-ship-data").eq(0).text();
        var lastwicket = $("span[style='color:#333']").eq(1).text();

        var batsman = $('div.batsmen-name').eq(0).text();
        // var batsmanimg = $('app-player-profile-img').eq(0).html();
        const batsmanimg = $('img').eq(2).prop('src');
        // console.log(batsmanimg);
        var batsmanrun = $('div.batsmen-score').eq(0).text();
        // var bat = $('div.batsmen-score').eq(0).html();

        // var bat2 = $("div.batsmen-score").eq(1).html();
        var batsman2img = $('img').eq(3).prop('src');
        var batsman2 = $('div.batsmen-name').eq(1).text();
        var batsmanrun2 = $('div.batsmen-score').eq(1).text();

        var bowler = $('div.batsmen-name').eq(2).text();
        var bowlerimg = $('img').eq(4).prop('src');
        var bowlerscore = $('div.batsmen-score.bowler').eq(0).text();


        var livescore = ({
            title: title || "",
            balltoball: balltoball || "",

            logo: logo || "",
            team1: team1 || "",
            score: score || "",
            overs: overs || "",
            runrate: runrate || "",
            update: update || "",

            partnership: partnership || "",
            recentballs: recentballs || "",
            lastwicket: lastwicket || "",
            commentary: commentary || "",

            batsman: batsman || "",
            batsmanimg: batsmanimg || "",
            batsmanrun: batsmanrun || "",
            // bat: bat || "",

            batsman2: batsman2 || "",
            batsman2img: batsman2img || "",
            batsmanrun2: batsmanrun2 || "",
            // bat2: bat2 || "",

            bowler: bowler || "",
            bowlerimg: bowlerimg || "",
            bowlerscore: bowlerscore || "",

            id: id2 || "1",
        });

        if (!livescore)
        return new Response("matchs not found", { status: 404 })

    return new Response(JSON.stringify(livescore), { status: 200 })
    //  return new Response(JSON.stringify({kkkkk: 'iuiuiuou', ppppp: 'zsxxxdxcxx'}), { status: 200 })


    }
    catch (error) {
        return new Response("Failed to fetch data ", { status: 500 })
    }

       

        // return new Response(JSON.stringify({kkkkk: 'iuiuiuou', ppppp: 'zsxxxdxcxx'}), { status: 200 })

        // return new Response(JSON.stringify(matchs), { status: 200 })

    }
    catch (error) {
        return new Response("Failed to fetch data ", { status: 500 })
    }
   
}
