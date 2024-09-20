import { Link, Outlet } from "react-router-dom";
import Handle from "../write/Handle";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";



const Signin = ()=>{

  const [input , setinput] = useState([]);

  const handlesubmit = (e)=>{
      let name = e.target.name;
      let value = e.target.value;

      setinput((v)=>({...v , [name]:value}))
  }

  const submit = ()=>{
      let api = "http://localhost:3000/Info";
      axios.post(api, input).then((res)=>{
          alert("data posted")
          console.log(res.data)
      })
      
  }



    return(
        <>
     
    <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Show All Data -> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="Display">Display</Nav.Link>
            <Nav.Link as={Link} to="Delete">Delete</Nav.Link>
            <Nav.Link as={Link} to="Search">Search</Nav.Link>
          </Nav>
        </Container>
    </Navbar>




Enter Name : <input type="text" name="Name" value={input.val} onChange={handlesubmit} />
        <br/>
        <br/>

        Phone Number : <input type="text" name="PhoneNumber" value={input.phone} onChange={handlesubmit} />
        <br/>
        <br/>

        Location : <input type="text" name="Location" value={input.location} onChange={handlesubmit} />
        <br/>
        <br/>

        <Button variant="warning" onClick={submit}>submit</Button>
        <br/>
        <br/>



        <Outlet/>

       
        </>
    );
}
export default Signin;