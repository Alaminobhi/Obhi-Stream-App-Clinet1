import {Row, Col, Card} from 'react-bootstrap';

export function Match({item}) {
    const { title, update,
     currentscore , batsman,batsmanrun,ballsfaced, fours, sixes,sr,batsmantwo, batsmantworun,
    batsmantwoballsfaced,batsmantwofours,batsmantwosixes, batsmantwosr,bowler,
    bowlerover,bowlerruns, bowlerwickets,bowlermaiden,bowlertwo,
     bowletworover,bowlertworuns, bowlertwowickets, bowlertwomaiden,
     partnership,recentballs,lastwicket,runrate,commentary,id} = item;

  return (
    <Col key={id}>
        <Card
          bg='dark'
          className="mb-2"
        >
          <Card.Header>{}</Card.Header>
          <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text>{update}</Card.Text>
            <Card.Text>{currentscore}</Card.Text>
            <Card.Text>{runrate}</Card.Text>
            <Card.Text>Batting:</Card.Text>
            <Card.Text>{batsman} : {batsmanrun}</Card.Text>
            <Card.Text>{batsmantwo} : {batsmantworun}</Card.Text>
            <Card.Text>Bowling:</Card.Text>
            <Card.Text>{bowler}/ O:{bowlerover}/ R:{bowlerruns}/ W:{bowlerwickets}/ M:{bowlermaiden}</Card.Text>
            <Card.Text>{bowlertwo}/ O:{bowletworover}/ R:{bowlertworuns}/ W:{bowlertwowickets}/ M:{bowlertwomaiden}</Card.Text>
            <Card.Text>Partnership: {partnership}</Card.Text>
            <Card.Text>Recent balls: {recentballs}</Card.Text>
            <Card.Text>Last wkt: {lastwicket}</Card.Text>
            <Card.Text>{commentary}</Card.Text>
          </Card.Body>
        </Card>
  
    </Col>
  );
}