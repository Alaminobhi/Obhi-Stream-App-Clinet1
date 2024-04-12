"use client"
import { useState } from 'react';
import { useEffect } from 'react';

export default function HisabNikash() {

    const [date, setDate] = useState('');
    const [presente, setPresente] = useState('');
    const [taka, setTaka] = useState('');
    const [vara, setVara] = useState('');

    const [hisabs, setHisabs] = useState('');
    console.log(hisabs);

    const data = {date, presente, taka, vara};

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

          const response = await fetch("/api/hajira-hisab/add-hajira", {
              method: "POST",
              body: JSON.stringify(data)
          })

          if (response.ok) {
              alert('done properly');
              // setBookName('')
              // setBookTopic('')

              location.reload()
          }

      }

      catch (error) {
          console.log(error)
      }
      finally {

      }
        
      }
      
    // fetch data
    const dataFetch = async () => {
      const response = await fetch("/api/hajira-hisab");
        const data = await response.json();
      setHisabs(data);
    };

      useEffect(() => {
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


      const handleDelete = async (hisab) => {
        console.log('delete clicked ', hisab)
        const confirmed = confirm("Are you sure to delete this data?")
        if (confirmed) {
            try {
                await fetch(`/api/hajira-hisab/${hisab._id.toString()}`, {
                    method: "DELETE",
                });

                const filterhisabs = hisabs.filter((item) => item._id != hisab._id)
                setHisabs(filterhisabs)

            }
            catch (error) {
                console.log(error)
            }
        }
    }
    const handleUpdate = async (hisab, data) => {
        console.log('update');
        try {
            const response = await fetch(`/api/hajira-hisab/${hisab._id}`, {
                method: "PATCH",
                body: JSON.stringify(data)
            });
            console.log('response ', response)
            if (response.ok) {
                console.log('response2 ', response)
                alert('update successfully');
                fetchBook();

            }
        }
        catch (error) {
            console.log(error)
        }

    }

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
              <button className="btn " onClick={() => { handleDelete(hisab) }}>delete</button>

            <br></br>

            <button className="btn ms-3 " onClick={() => handleUpdate(hisab, inputText)}>Update</button>
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