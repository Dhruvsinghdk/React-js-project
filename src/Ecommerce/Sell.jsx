import Button from 'react-bootstrap/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './images/R57.jpg';
import img2 from './images/R58.jpg';
import img3 from './images/R59.jpg';
import img4 from './images/R60.jpg';


const Sell = ()=>{

   
    

    return(
        <>
        <hr size = "5px"/>
        <Outlet/>
        <hr size = "5px"/>


        <div style={{backgroundColor:"grey", width:"1900px" , height:"400px",color:"whitesmoke"}}>
            <h1 style={{fontFamily:"fantasy", padding:"70px"}}>Become a Member</h1>
            <div style={{padding:"20px"}}>
            <Link to="Signin"><Button variant='warning'>Signin</Button></Link>
</div>
            <h2>Pay lesser selling fee* with every order on <br/>country most visited <br/>online shopping destination</h2>
        </div>
        
        <div style={{border:"2px solid red" , padding:"30px", borderRadius:"40px" }}>
            <h1 style={{width:"500px", margin:"auto", padding:"30px"}}>How To Sell On Amazon</h1>
    <Row>
        <Col> <h4 style={{border:"1px solid purple"}} >Step 1 : <img src={img1} width="150px" />Register Your Account</h4>
        <h4> Register on Amazon with GST/PAN details and an active bank account</h4>
       </Col>


        <Col><h4 style={{border:"1px solid green"}} >Step 2 : <img src={img2} width="150px" style={{borderRadius:"50px"}}/>Choose storage & shipping</h4>
        <h4>Choose storage, packaging, and delivery options</h4></Col>
    </Row>
    <Row>
        <Col><h4 style={{border:"1px solid blue"}}>Step 3 : <img src={img3} width="150px" style={{borderRadius:"50px"}}/>  List your products</h4>
        <h4>List your products by providing product and brand details</h4></Col>

        <Col><h4 style={{border:"1px solid orange"}}  >Step 4 : <img src={img4} width="150px" style={{borderRadius:"50px"}}/> Complete orders & get paid</h4>
        <h4>Deliver orders to customers on time and get paid within 7 days of delivery</h4></Col>
    </Row>
        </div>
      
       
        
        </>
    );
}
export default Sell;
