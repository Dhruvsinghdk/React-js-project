
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './images/R31.jpg'
import img2 from './images/R32.jpg'
import img3 from './images/R33.jpg'
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addtocart } from './Slice';
import Data3 from './Data3';



const Today = ()=>{

    const work = useSelector((state)=>state.cart)
    console.log(work)
    const dispatch = useDispatch();


    const ans = Data3.map((key)=>{
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
        <img src={img}  />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} width="1800px" height="200px" />
        <Carousel.Caption>
        <h3></h3>
        <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} width="1800px" height="200px" />
        <Carousel.Caption>
        
       <h3></h3>
       <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<h1 align="center" style={{backgroundColor:"Highlight"}}>All Accessories</h1>


<Row>
    {ans}
</Row>




        </>
    );
}
export default Today;