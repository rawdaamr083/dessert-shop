import {  Routes, Route } from 'react-router-dom';

import Nav from "./COMPONENTS/Nav";
import Home from './PAGES/Home';  // 
import Login from './PAGES/Login'; // 
import Contact from './PAGES/Contact';
import Product from './PAGES/Product';
import Footer from './COMPONENTS/Footer';
import  { context1 } from './context/Logcontext';

import { useContext, useEffect, useState } from 'react';
import Signup from './PAGES/Signup';


function App() {
  const {navigate}=useContext(context1)
//in reACT  MOVE TO TOP BUTTON 
  const [button, setbutton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    // 1️⃣ المقارنة برقم صريح (200) مش "200px"
    if (window.scrollY > 200) {
      setbutton(true);
    } else {
      setbutton(false);
    }
  };

  // 2️⃣ إضافة الـ Event Listener عشان يراقب حركة السكرول باستمرار
  window.addEventListener("scroll", handleScroll);

  // 3️⃣ الـ Cleanup function عشان يمسح الـ Listener لما الكومبوننت يتقفل
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  /*
  way in js
// let btn3 =document.getElementById("btn_3");
// window.onscroll=function(){if (window.scrollY >= 100) {

//         btn3.style.position = "fixed";
//             btn3.style.bottom = "20px";
//             btn3.style.right = "20px";
//             btn3.style.display="block";
// }
// else{
//     btn3.style.display="none";
// }
// }
// btn3.onclick=function(){
// window.scrollTo({
// top:0,
// behavior:"smooth"

// })
// }
  */



  return (
    <>
    
  <Nav ></Nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
     <Route path="/Product" element={<Product />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Signup" element={<Signup />} />
  </Routes>




  {/*  */}

  {button?
  <button onClick={()=>{window.scrollTo({top:0,
    behavior:"smooth"
  })}}
  style={{position:"fixed",
    bottom:"20px",
    right:"10px",
     textAlign: "center",
        display:" block",
    fontWeight: "800",
    fontSize: "20px",
    color: "aliceblue",
    borderRadius: "12px",
    padding:" 9px",
    backgroundColor: "#685916e3",
    margin:" 10px auto",
    width: "fit-content", 

    
  }}
  
  
  >move to top</button>:""}
        






  <button onClick={()=>navigate(-1) } style={{
         /* يخلي الزرار متناسق مع الشاشة الصغار */
        textAlign: "center",
        display:" block",
    fontWeight: "800",
    fontSize: "20px",
    color: "aliceblue",
    borderRadius: "12px",
    padding:" 9px",
    backgroundColor: "rgb(174 177 78 / 42%)",
    margin:" 10px auto",
    width: "43%", 

        }}>back</button>
  <Footer></Footer>

    </>
  )
}

export default App
