import { useState } from "react";

const Abhi = () => {
    const [inputurl, setInputurl] = useState('');

    const urlinput = async (event) =>{
        event.preventDefault();
        const url = `https://obhistream-server.vercel.app/added-hisab`;
        await fetch(url,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
         })
         .then( res =>console.log('server', res))
        
         // socket.emit('add-hisab', data);
         location.reload()
    }

    return ( 
        <div>
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
            </div>

        </div>
     );
}
 
export default Abhi;