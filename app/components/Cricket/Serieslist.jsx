import { Link } from "react-router-dom";
const Serieslist = ({item}) => {
    const {matchlink,title,logo,team1,score, overs,team2, score2,overs2,logo2,stutas,update,id} =item;
    const link =`https://crex.live${matchlink}`

    return ( 
        <div className="m-4 bg-light border border-success rounded-3 text-center animate__animated animate__bounce">
           <h3 className="mb-2">{title}</h3>
           <Link className="row m-3" to={"matchdetail/" + id}>
                <div className="col row">
                    <div className="col">
                        <img src={logo} alt={team1} height='60' width='50' />
                    </div>
                    <div className="col row">
                        <h5>{team1}</h5>
                        <div className="col row">
                            <div className="col">{score}</div>
                            <div className="col">{overs}</div>
                        </div>
                    </div>
                </div>
                <div className="col xs={8}">
                    <div>{stutas}</div>
                    <div>{update}</div>
                </div>
                <div className="col row">
                    <div className="col">
                        <img src={logo2} alt={team2} height='60' width='50' />
                    </div>
                    <div className="col row">
                        <div>{team2}</div>
                        <div className="col row">
                            <div className="col">{score2}</div>
                            <div className="col">{overs2}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
     );
}
 
export default Serieslist;