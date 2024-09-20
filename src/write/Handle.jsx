import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";



const Handle = ()=>{

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

        


        </>
    );
}
export default Handle;