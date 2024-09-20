import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

const Display = ()=>{


    const [data , setdata] = useState([]);
    
    useEffect(()=>{
        loaddata();
    },[])

    const loaddata = ()=>{
        let api = "http://localhost:3000/Info";

        axios.get(api).then((res)=>{
            setdata(res.data)
            console.log(data)
        })
    }


    const ans = data.map((key)=>{
        return(
            <>
            <tbody>
            <tr>
          <td>{key.id}</td>
          <td>{key.Name}</td>
          <td>{key.PhoneNumber}</td>
          <td>{key.Location}</td>
        </tr>
</tbody>
            </>
        );
    })



    return(
        <>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Location</th>
        </tr>
      </thead>
      {ans}
    </Table>
        </>
    );
}
export default Display;