import LiveScore from "./LiveScore";
import { Series } from "./Series";

function Cricket() {

    // const APIKEY = '9fc904d1-f852-4ed6-854a-c330c617fa49';
    // const APIKEY1 = '12df9478-4115-465d-b2c5-fd1ebf7a8be4';
    // const url = `https://api.cricapi.com/v1/currentMatches?apikey=${APIKEY1}`
    
return ( 
        <div className="center-block text-center justify-content-center align-items-center m-10">
         <Series/>
           {/* <LiveScore/> */}
        </div>
     );
}

export default Cricket;