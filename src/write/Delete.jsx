

import img from './R.jpg'
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

const Delete = ()=>{


    const [data , setdata] = useState([]);
    
    useEffect(()=>{
        loaddata();
    },[])

    const loaddata = (myid)=>{
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
          <a href="#">
            <img src={img} alt="" width="30px" height="20px" onClick={()=>{mydel(key.id)}} />
          </a>
        </tr>
</tbody>
            </>
        );
    })

    const mydel = (myid)=>{
        let url = `http://localhost:3000/Info/${myid}`;
        axios.delete(url).then((res)=>{
            alert("data ddeleted")
            loaddata()
        })
    }



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
export default Delete;