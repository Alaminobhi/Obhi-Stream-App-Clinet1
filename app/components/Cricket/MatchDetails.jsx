import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MatchDetails = () => {
    const params = useParams()
    const id = Number(params.id) || 0;
    console.log(id);

    const [data, setData] = useState("");
    const [mlink, setMlink] = useState('')
    let text = data?.matchlink;
    console.log(mlink);
    const cut = async() =>{
            var live = 'live';
            var scorecard = 'scorecard';
            var info = 'info';
            let link2 ='https://crex.live';
            let d = [];
             let t = '';

             for (let i = 0; i < text?.length; i++) {
              var g =(text[i]);
              if(g === '/'){
                d.push(t);
                t = '';
                }
               t += text[i]
             }
            
             const totalTaka = await Array.isArray(d) ? d?.reduce((totalTaka, hisab) => totalTaka + hisab): 0;
             
             const livelink = link2 + totalTaka +'/' + live;
             const scorecardlink = link2 + totalTaka + '/' + scorecard;
             const infolink = link2 + totalTaka + '/' + info;

             const mmlink ={livelink, scorecardlink, infolink};
            setMlink(JSON.stringify(mmlink));

             
    }

   const dataLoad = async () => {
      const url = 'http://localhost:8000/crexmatch';
      const res = await fetch(url)
      const data = await res.json();

     const tt = data?.find((d) => d.id === id);
     setData(tt);
  }
  

    useEffect(() => {
      dataLoad();
      
      }, [id])

      useEffect(() =>{
        cut();
      },[data])
 
    return ( 
        <div>
          <button onClick={cut}>okkkk</button>

        </div>
     );
}
 
export default MatchDetails;