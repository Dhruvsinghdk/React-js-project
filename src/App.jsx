import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navy from "./Ecommerce/Navy";
import Home from "./Ecommerce/Home";
import Show from "./Ecommerce/Show";
import Write from "./Ecommerce/Write";
import AboutUs from "./write/AboutUs";
import Minitv from "./Ecommerce/Minitv";
import Sell from "./Ecommerce/Sell";
import Signin from "./Ecommerce/Signin";
import Display from "./write/Display";
import Delete from "./write/Delete";
import Search from "./write/Search";
import Today from "./Ecommerce/Today";
import Fashion from "./Ecommerce/Fashion";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from './Ecommerce/images/R61.jpg';
import img2 from './Ecommerce/images/R62.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import img3 from './Ecommerce/images/R63.jpg';

const App = ()=>{

  

  return(
    <>

<Navbar bg="dark" data-bs-theme="dark">
  <div style={{padding:"0px", margin:"auto"}}>
        <Container>
          <div align = "center">
          <Navbar.Brand href="#home"><img src={img1} style={{borderRadius:"30px", height:"60px"}}/></Navbar.Brand>
          </div>
          <Nav className="me-auto">
            <Nav.Link href="#home"><div>Location <img src={img2} style={{height:"25px"}} /> </div></Nav.Link>
           
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>

            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>

            

            <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
      <Nav.Link href="#features"><img src={img3} height="20px" />Language</Nav.Link>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>

            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>

            
            <Nav.Link href="#pricing">Return & Orders</Nav.Link>
            
          </Nav>
        </Container>
        </div>
  </Navbar>



    <div className="h3">
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Navy/>}>
      <Route path="Home" element={<Home/>}/>
      <Route path="Show" element={<Show/>}/>
      <Route path="AboutUs" element={<AboutUs/>}/>
      <Route path="Minitv" element={<Minitv/>}/>

      <Route path="Sell" element={<Sell/>}>
      <Route path="Signin" element={<Signin/>} >
      <Route path="Display" element={<Display/>} />
      <Route path="Delete" element={<Delete/>}/>
      <Route path="Search" element={<Search/>}/>
      </Route>
      </Route>
      
      <Route path="Signin" element={<Signin/>} >
      <Route path="Display" element={<Display/>} />
      <Route path="Delete" element={<Delete/>}/>
      <Route path="Search" element={<Search/>}/>
      </Route>

      <Route path="Today" element={<Today/>}/>
      <Route path="Fashion" element={<Fashion/>}/>


      </Route>
    </Routes>
    </BrowserRouter>



    </div>
    
    </>
  );
}
export default App;
