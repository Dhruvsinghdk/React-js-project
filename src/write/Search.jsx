import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Search = ()=>{

    const [val , setval] = useState("");

    const [data , setdata] = useState([]);

    const search = ()=>{
        let api = `http://localhost:3000/Info?Name=${val}`;
        axios.get(api).then((res)=>{
            setdata(res.data)
        })
    }
    const ans = data.map((key)=>{
        return(
            <>
        <tr>
          <td>{key.id}</td>
          <td>{key.Name}</td>
          <td>{key.PhoneNumber}</td>
          <td>{key.Location}</td>
        </tr>
            </>
        );
    })

    return(
        <>
        Enter Value : <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}}  />

        <Button onClick={search}> Search</Button>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>PhoneNumber</th>
          <th>Location</th>
        </tr>
      </thead>
      {ans}
      </Table>

        </>
    );
}
export default Search;
