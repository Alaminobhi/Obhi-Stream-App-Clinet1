import { useEffect, useState } from "react";
import Serieslist from "./Serieslist";

export const Series = () => {
    const [data, setData] = useState("");

    useEffect(() => {

        const url = 'http://localhost:8000/crexmatch';
        fetch(url)
        .then((res) => res.json())
        .then(dat=>setData(dat))
       
      }, [])
    return (
        <div className="mt-5 mb-5">
            <div className="row">
            {
             data | data?.length ? data?.map(it => 
                <Serieslist
                key={it.id}
                item={it}
                ></Serieslist>
                ) : <div className="text-center"> <h2>আপনার জন্য কোন ডাটা নাই!!!</h2> </div>
            }
            </div>
        </div>
    );
};