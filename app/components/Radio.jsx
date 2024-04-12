/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Radio = () => {
	const [stations, setStations] = useState();
	const [item, setItem] = useState({codec: "MP3",country: "Bangladesh",
		countrycode: "BD",favicon:"https://dhakafm904.com/assets/images/logo.png",homepage: "http://www.jago.fm/",language:"bengali",languagecodes:"bn",
		name: "Jago FM 94.4",url: "http://128.199.184.111:12496/stream",
		url_resolved: "http://128.199.184.111:12496/stream",votes:21716});
	// console.log(stations);
    
	// let url1 = 'http://de1.api.radio-browser.info/json/countries'; 
	let urla = 'https://de1.api.radio-browser.info/'
	let urlp = 'http://de1.api.radio-browser.info/json/stations';
	let url = 'https://de1.api.radio-browser.info/json/stations/search?limit=50&countrycode=BD&hidebroken=true&order=clickcount&reverse=true';

	fetch(url) 
	.then(response => response.json()) 
	.then(data => {
		setStations(data); 
	}) 
	.catch(error => console.error(error)); 

	// useEffect(() => {
	// 	// fetch data
	// 	const dataFetch = async () => {
	// 	  const data = await (
	// 		await fetch(
	// 		  url
	// 		)
	// 	  ).json();
	
	// 	  // set state when the data received
	// 	  setStations(data);
	// 	};
	
	// 	dataFetch();
	//   }, []);
	
   const RadioPlay = (e) =>{
	{stations && stations?.map(station=>{
		if (station.url==e) {
			setItem(station);
		} 
	})}
   }
	return (
		<div>
			<div>
				<Card style={{ width: '18rem' }} bg="secondary">
					<Card.Img variant="top"  alt='https://dhakafm904.com/assets/images/logo.png' src={item?.favicon} cap={item.toString()}/>
					<Card.Body>
						<Card.Title>{item?.name}</Card.Title>
						<audio controls autoPlay src={item?.url_resolved ? item?.url_resolved : "http://128.199.184.111:12496/stream"} ></audio>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Container>
					<Row xs={1} md={2} lg={4} className="g-4" >
						{stations && stations.map((station, index) => (
						<Col key={index}>
							<Card>
							<Card.Img variant="top"  alt='https://dhakafm904.com/assets/images/logo.png' src={station.favicon} cap={item.toString()}/>
							<Card.Body>
								<Card.Title>{station.name}</Card.Title>
								<Button as="a" variant="primary" onClick={()=>RadioPlay(station.url)}>Play</Button>
							</Card.Body>
							</Card>
						</Col>
						))};
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Radio;