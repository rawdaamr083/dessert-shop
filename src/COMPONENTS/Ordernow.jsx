 import order from"../style/order.module.css"
import  { context1 } from '../context/Logcontext';
import { useContext } from "react";
 function Ordernow() {
  /*
ISLOG => TO CHECK log state
navigate => to navigate


  */
  const {islog,navigate}=useContext(context1)
// to navigate

const check=()=>{
if(islog)
{navigate('/Product')}
else{
    alert('log in please')
    navigate("/Login")
}
}





  return (
    <div style={{width:"100%"}} className={order.orderContainer}>
<img src="/images/istockphoto-139885298-1024x1024.jpg"></img>
<button className={order.button1} onClick={check}>OrderNow</button>

</div>
  );
}
export default Ordernow