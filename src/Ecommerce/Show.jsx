import { useDispatch, useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { clearcart, recdelete } from "./Slice";



const Show = ()=>{
   
    const work = useSelector((state)=>state.cart.item)
    console.log("Item = ",work)
    const dispatch = useDispatch();

const ans = work.map((key)=>{
        return(
            <>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {key.id}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(recdelete(key.id))}}>Delete Cart</Button> 
        <Button variant="success">Buy now</Button>
      </Card.Body>
      
    </Card>
   
</>
        );
    })

    return(
        <>
        <Button variant="danger" onClick={()=>{dispatch(clearcart())}}>Clear Cart</Button>
    <Row>

        {ans}

    </Row>
    
        </>
    );
}
export default Show;