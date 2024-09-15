
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Write from './Write';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navy = ()=>{
    const card = useSelector((state)=> state.cart)

    const navigate = useNavigate();

    const About = ()=>{
        navigate("AboutUs")
    }

    return(
        <>
<div align = "center">
<Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="Home">Home</Nav.Link>
            <Nav.Link as={Link} to="Show">Show {card.qty}</Nav.Link>
           
          </Nav>
        </Container>
     </Navbar>

</div> 


      <hr size = "4px"/>
      <Outlet/>
      <hr size = "4px"/>

      <Write/>
      <br/>
      <Row style={{backgroundColor:"darkgrey"}}>
        <Col md={3}><Button variant='link' onClick={About}>About Us</Button><br/>
        <Button variant='link' onClick={About}>Press Relese</Button><br/>
        <Button variant='link' onClick={About}>Amazon Science</Button>
        </Col>

        <Col md={3}><Button variant='link' onClick={About}>Facebook</Button><br/>
        <Button variant='link' onClick={About}>Twitter</Button><br/>
        <Button variant='link' onClick={About}>Instagram</Button></Col>
        
        <Col md={3}><Button variant='link' onClick={About}>Sell</Button><br/>
        <Button variant='link' onClick={About}>Under website</Button>
        <br/>
        <Button variant='link' onClick={About}>Fullfillment</Button>
        </Col>

        <Col md={3}><Button variant='link' onClick={About}>Your Account</Button>
        <br/>
        
        <Button variant='link' onClick={About}>App Download</Button>
        <br/>
        <Button variant='link' onClick={About}>100% Purchase Protection</Button>
        </Col>

      </Row>
       
    
     
        
        </>
    );
}
export default Navy;