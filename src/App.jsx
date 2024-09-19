import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navy from "./Ecommerce/Navy";
import Home from "./Ecommerce/Home";
import Show from "./Ecommerce/Show";
import Write from "./Ecommerce/Write";
import AboutUs from "./write/AboutUs";
import Minitv from "./Ecommerce/Minitv";


const App = ()=>{

  


  return(
    <>
    <div className="h3">
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Navy/>}>
      <Route path="Home" element={<Home/>}/>
      <Route path="Show" element={<Show/>}/>
      <Route path="AboutUs" element={<AboutUs/>}/>
      <Route path="Minitv" element={<Minitv/>}/>
      </Route>
    </Routes>
    </BrowserRouter>



    </div>
    
    </>
  );
}
export default App;
