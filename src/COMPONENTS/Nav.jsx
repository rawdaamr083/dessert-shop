import nav from "../style/nav.module.css"
import { Link } from 'react-router-dom';
import  { context1 } from '../context/Logcontext';
import { useContext } from "react";
function Nav() {
/*
islog=> to save log state
user name=> to take username from in put
hnadle log out=> fun to make
1-navite to  home
2- to make set isloga(FALSE)

*/
   const {islog,currentuser,handleLogout}=useContext(context1)

  return (
    <>
      
<div>
    <div  className={nav.main} >
<h1 className="logo"> <i className="fa-solid fa-cookie-bite fa-width-auto"style={{color:" #a32b5582"}} ></i>DESSERT SHOP</h1>
<ul className={nav.nav}>
<Link to="/"><li >HOME</li></Link>
<Link to="/Product"><li >PRODUCT</li></Link>
<Link to="/Contact"><li >CONTACT US</li></Link>
<div className={nav.buttons}>
   
    {islog?<div style={{display:"flex", gap:"2px"}}>
    <span >welcome {currentuser.name}!</span>
    <button onClick={handleLogout}>logout</button></div>

    : <Link to="/login" >
    <button>log in</button></Link>}

</div>
</ul>
</div>

</div>







    </>
  )
}

export default Nav
