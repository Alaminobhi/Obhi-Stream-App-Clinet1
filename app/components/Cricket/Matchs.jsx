import { useEffect } from "react";
import useFetch from "./CustamFung";
import { Match } from "./Match";
import {Row, Container} from 'react-bootstrap';
import { useState } from "react";

export function Matchs() {
  const [data, setData] = useState('');
    const APIKEY1 = '12df9478-4115-465d-b2c5-fd1ebf7a8be4';
    const APIKEY = '9fc904d1-f852-4ed6-854a-c330c617fa49';
    console.log(data);

  
    // const url = 'https://api.cricapi.com/v1/matches?apikey=9fc904d1-f852-4ed6-854a-c330c617fa49&offset=0';
    // const url = 'http://localhost:8000/cricketlive';
    // const [data] = useFetch(url);
    // console.log(data);

    useEffect(() => {
      const url = 'http://localhost:8000/cricketlive';
      fetch(url)
      .then((res) => res.json())
      .then(data=>setData(data))
     
    }, [])
    
  return (
    <Container>
      <Row>
    
    {
     data | data?.length ?  <Match 
        key={data.id}
        item={data}
        ></Match> : <div className="text-center"> <h2>আপনার জন্য কোন ডাটা নাই!!!</h2> </div>
    }
    
  </Row>
</Container>
  );
}