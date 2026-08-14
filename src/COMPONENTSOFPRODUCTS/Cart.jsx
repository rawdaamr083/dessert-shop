 
 import c from "../style/Cart.module.css"
 import { useContext, useState } from "react";
 import { context1 } from "../context/Logcontext";
 
 function Cart() {
    const {card,toDo,remove,handleConfirmOrder}=useContext(context1)
//////////////
const [confirm,showconfirm]=useState(false)
/*
=> to show pop up of confirm
*/







  return (
    <>
    <div>
    <div className={c.main}>selsected items</div>
    <div className={c.parent}>
<div className={c.itemadded}>
{toDo.map((item)=>(

<div className={c.card} key={item.id}>
            <img src={item.image} alt={item.title} />
            <h1 className={c.title}>{item.title}</h1>
            <p className={c.description}>{item.description}</p>
            <div style={{display:"flex"}}>
            <h2 className={c.price1}>{item.price} EGP</h2>
            <h2 className={c.quan}>{item.quantity}</h2>
            <button onClick={()=>{remove(item)}}>remove</button>
            </div>
</div>


))}

</div>
<div className={c.sticky}>
<div className={c.total}>
     <img 
      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" 
      alt="Shopping Cart" 
      style={{ width: "120px", height: "auto", margin: "0 auto", display: "block" }} 
    />
    
     <div className={c.price}>
        total Price:{card}</div>
    
    
    
</div>

<button className={c.confirm} onClick={()=>{showconfirm(true)

}}>confirm order</button>


</div>
</div>
{/* ////////////////////////////////// */}
{/* pop up */}
{(toDo.length > 0 && confirm) ? (
  <div className={c.overlay}>
    <div className={c.pop}>
      <h2 className={c.popHeader}>Order Confirmation 🛒</h2>
      
      {/* حاوية للمنتجات عشان تعمل scroll لو المنتجات كثيرة */}
      <div className={c.popList}>
        {toDo.map((item) => (
          <div className={c.popCard} key={item.id}>
            <img src={item.image} alt={item.title} className={c.popImg} />
            <div className={c.popInfo}>
              <h3 className={c.popTitle}>{item.title}</h3>
              <div className={c.popDetails}>
                <span className={c.popPrice}>{item.price} EGP</span>
                <span className={c.popQuan}>Qty: {item.quantity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={c.popFooter}>
        <p className={c.p}>Order confirmed!</p>
        <button className={c.closeBtn} onClick={() =>{ showconfirm(false)
            handleConfirmOrder()
        }}>
          Close
        </button>
      </div>
    </div>
  </div>
) : ""}








    </div>
{/* ////////////////////////////////// */}





    </>
  )
}
export default Cart