import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [url]);

  return [data];
};

// const urllink = 'https://crex.live/scoreboard/OFB/1IR/10th-Match/J/K/kkr-vs-rcb-10th-match-indian-premier-league-2024/live';
//       let url = new URL('http://localhost:5000/crexs');
//       url.search = new URLSearchParams({item: urllink});

//       const response = await fetch(url);
//       // console.log(response);
//       const data2 = await response.json();
//       console.log(data2);
//         if (response.ok) {
//             alert('done properly');
           
//             // location.reload()
//         }
    const APIKEY = '9fc904d1-f852-4ed6-854a-c330c617fa49';
    const APIKEY1 = '12df9478-4115-465d-b2c5-fd1ebf7a8be4';

export default useFetch;


