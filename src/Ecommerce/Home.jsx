import { useDispatch, useSelector } from "react-redux";
import Data from "./Data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtocart } from "./Slice";
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carosel from "./Carosel";

import video from './Rec.mp4'





const Home = ()=>{
    const work = useSelector((state)=>state.cart)
    console.log(work)
    const dispatch = useDispatch();

    const ans = Data.map((key)=>{
        return(
        <>
<Col md={3}>
<Card style={{ width: '18rem' }}>
      <img src={key.img}/>
    <Card.Body>
        <Card.Title>{key.Nm}</Card.Title>
        <Card.Text>
          {key.id}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addtocart(key))}} >Add To Cart</Button>
      </Card.Body>
    </Card>
</Col>
        </>
        );
    })

    return(
        <>
        <Carosel/>

       <h1 align = "center">All items</h1>
       
<div style={{padding:"10px"}}>
       <Row>
       
        {ans}
       
       </Row>
  </div>   

  <video controls = "controls" aut src={video} width="900" height="300px" >
    
  </video>
  
        </>
    );
}
export default Home;