import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./Card.css"

export default function Cards({ Name, Image, Type, Id,Str,Life }) {
  return (
    <div className="Cards">
      <Card style={{ width: '18rem',backgroundPosition:"center",backgroundImage:"url(https://i.pinimg.com/236x/66/c4/60/66c460844291da1585e2aae182aed0d0.jpg)",backgroundSize:"cover" }}><Link to={`/pokemon/${Id}`}>
      <h2><Card.Header style={{ color: "rgba(255, 245, 245, 0.8)",fontFamily:"sans-serif"}} className="Id">  {Name}   </Card.Header></h2>
        <Card.Img className="container" variant="top" src={Image}  />
        <Card.Body >
          <h1><Card.Title style={{fontFamily:"sans-serif"}}className="container">
            # {Id}
          </Card.Title></h1>
          <h3><Card.Text style={{fontFamily:"sans-serif"}}className="container">
            {Type}
          </Card.Text></h3>
          <h3><Card.Text style={{fontFamily:"sans-serif"}}className="container">str: {Str}</Card.Text></h3>
        </Card.Body>
      </Link>
      </Card>
    </div>

)
};

{/* {[
  'light',

].map((variant) => (
  <Card
    bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Link to={`/pokemon/${Id}`}>
      <Card.Header>{Name}</Card.Header>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        <Card.Title>{Type}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Link>
  </Card>
))} */}