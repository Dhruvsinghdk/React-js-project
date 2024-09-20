
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import img4 from './images/R4.jpg'
import img5 from './images/R5.jpg'
import img6 from './images/R6.jpg'

const Carosel = ()=>{
    return(
        <>
        <Carousel>
      <Carousel.Item>
        <img src={img4} height="300px" width="1900px"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img5} height="300px" width="1900px"/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={img6} height="300px" width="1900px"/>
        <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    );
}
export default Carosel;