import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import img1 from './images/R46.jpg'
import img2 from './images/R47.jpg'
import img3 from './images/R48.jpg'

import { useDispatch, useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addtocart } from './Slice';
import Data4 from './Data4';
import video from './Rec1.mp4'


const Fashion = ()=>{

    const work = useSelector((state)=>state.cart)
    console.log(work)
    const dispatch = useDispatch();


    const ans = Data4.map((key)=>{
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

<Carousel>
      <Carousel.Item>
       <img src={img1} width="1800px" height="400px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={img3}  width="1800px" height="400px"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 align ="center" style={{backgroundColor:"turquoise"}}>ALL FASHION</h1>

        <Row>
            {ans}
        </Row>

<video controls="controls" autoPlay="autoplay" width="1200"   >
  <source src={video} />
</video>

        </>
    );
}
export default Fashion;