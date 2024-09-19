import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import img1 from './images/R12.jpg'
import img2 from './images/R13.jpg'
import img3 from './images/R14.jpg'
import img4 from './images/R15.jpg'
import { useDispatch, useSelector } from 'react-redux';
import Data2 from './Data2';
import { addtocart } from './Slice';


const Minitv = ()=>{

    const work = useSelector((state)=>state.cart)
    console.log(work)
    const dispatch = useDispatch();

    const ans = Data2.map((key)=>{
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
       <img src={img1} width="1800px" height="500px"  />
        <Carousel.Caption>
          <h3>Avatar</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img2} width="1800px" height="500px"  />
        <Carousel.Caption>
          <h3>Price Of Persia</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={img3} width="1800px" height="500px"  />
        <Carousel.Caption>
          <h3>Underworld</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img src={img4} width="1800px" height="500px"  />
      <Carousel.Caption>
        <h3>Deadpool</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>


    <h1 align = "center" style={{backgroundColor:"yellowgreen"}}>Treanding Top 10 Movies</h1>


<Row>
    {ans}
</Row>



        </>
    );
}
export default Minitv;