import { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
export const context1 = createContext();
function Logcontext({children}) {

// 

  /// item selected (array)
// 1. الـ Cart
const [toDo, setToDo] = useState(() => {
  const savedCart = localStorage.getItem("toDo");
  if (savedCart&&savedCart!="[object object]") {
    return JSON.parse(savedCart);
  }
  return [];
}); 


// add items to cart
const add = (itemselected) => {
  // 1. بنشوف هل العنصر موجود في الـ toDo قبل كدة ولا لأ؟
  const isExist = toDo.find((todo) => todo.id === itemselected.id);
 
  if (isExist) {
    // 2. لو موجود: بنلف بـ map ونزود الـ quantity للمنتج ده بس
    const updatedCart = toDo.map((todo) => {
      if (todo.id === itemselected.id) {
        return { ...todo, quantity: todo.quantity + 1 };
      } else {
        return todo; // باقي المنتجات ترجع زي ما هي
      }
    });

    setToDo(updatedCart);
  } else {
    // 3. لو مش موجود: بنضيفه جديد ونحط الـ quantity بـ 1
    setToDo([...toDo, { ...itemselected, quantity: 1 }]);
  }
};
// done
// remove items from cart
const remove=(item)=>{

setToDo(toDo.filter((me)=>(
me.id!==item.id
)))
// to remove price
if(item.quantity>1)
addtocart(-`${item.price*item.quantity}`)
else{
  addtocart(-`${item.price}`)
}

}
// done
//price
// /////////////////////////////////
const addtocart=(price)=>{
setcard((prev)=>
    price+prev
)

}
///////////////////////


// 
// /////////////////////////////////////////
// => to store price
     // 4. السعر الكلي
const [card, setcard] = useState(() => {
  const savedCard = localStorage.getItem("card");
  if (savedCard) {
    return Number(savedCard); // تحويل الرقم من النص لرقم حقيقي
  }
  return 0;
});
     ////////////////////////////
 // 2. الـ Login State
const [islog, setislog] = useState(() => {
  const savedLog = localStorage.getItem("islog");
  return savedLog === "true"; 
});
/////////////
 // 3. info about user
 //related to sign up
const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser&&savedUser!="[object object]") {
    return JSON.parse(savedUser); 
    // لازم JSON.parse عشان يرجع Array
  }
  return []; 
  // يفضل تبدأ بـ Array فاضية مش String فاضي ""
});
/////////////////
//related to log in
const [currentuser, setcurrent] = useState(() => {
  const savedcurrent = localStorage.getItem("currentuser");
  if (savedcurrent&&savedcurrent!=="[object Object]"&&savedcurrent!=="Undefined") {
    return JSON.parse(savedcurrent); // تحويل النص لـ Object
  }
  return {}; // أوبجكت فاضي كـ default
});
////////////////////////////
const navigate = useNavigate(); // موجه الصفحات
/////////////
/*
fun handle log in and out&& releated to log in
*/
  const handleLogin = (userData) => {
 const exist=user.find((current)=>(current.email==userData.email)&&(current.password==userData.password)&&(current.name===userData.name))

if(exist){
  setcurrent(exist)
  return true;
  
}
else{
  return false
}

};
////////////////////////////////////
  // 3. دالة تسجيل الخروج
  const handleLogout = () => {
    setislog(false);
    setcurrent({});
    setToDo([])
  
    setcard(0)

    navigate("/")
  };
// ////////////////////////////////
  const alertfun=()=>{
    alert("login please")
                navigate('/Login')
}
///////////

// useEffect
//=> to store in local storage
useEffect(()=>{
window.localStorage.setItem("islog",islog);
localStorage.setItem("toDo", JSON.stringify(toDo));
  localStorage.setItem("card", card);
window.localStorage.setItem("currentuser",JSON.stringify(currentuser));

window.localStorage.setItem("user",JSON.stringify(user))
}
,[toDo,islog,currentuser,card,user])
//////////////////////////















// أول ما اليوزر الحالي يتغير (Login أو Logout)
useEffect(() => {
  if (currentuser?.email) {
    // 1. نجيب كل الكارتس المخزنة
    const savedCarts = JSON.parse(localStorage.getItem("allCarts")) || {};
    
    // 2. نجيب كارت اليوزر ده بالذات (لو ملهاش كارت بنرجع array فاضية)
    const userCart = savedCarts[currentuser.email] || [];
    
    // 3. نحطها في الـ toDo
    setToDo(userCart);
  } else {
    // لو عمل Logout بنخلي الـ toDo فاضية
    setToDo([]);
    setcard(0);
  }
}, [currentuser]);

// حفظ الـ Cart الخاصة باليوزر الحالي عند أي إضافة أو مسح
useEffect(() => {
  if (currentuser?.email) {
    const savedCarts = JSON.parse(localStorage.getItem("allCarts")) || {};
    
    // نحدث الـ array بتاعة اليوزر ده بس
    savedCarts[currentuser.email] = toDo;
    
    // ونحفظ الـ Object الكلي تاني
    localStorage.setItem("allCarts", JSON.stringify(savedCarts));
  }
}, [toDo, currentuser]);
const handleConfirmOrder = () => {
  // 1. تصفير الـ Cart والـ Price في الـ State
  setToDo([]);
  setcard(0);

  // 2. تحديث الـ LocalStorage وتفريغ الـ Cart بتاعة اليوزر ده بس
  if (currentuser?.email) {
    const savedCarts = JSON.parse(localStorage.getItem("allCarts")) || {};
    savedCarts[currentuser.email] = []; // بقت فاضية
    localStorage.setItem("allCarts", JSON.stringify(savedCarts));
  }

  alert("Order Confirmed Successfully! 🎉");
};

























  return (
    <>
  <context1.Provider value={{islog,currentuser,navigate,handleLogin,handleLogout,setcurrent,setislog,card,setcard,addtocart,alertfun,toDo,setToDo,add,remove,setUser,user,handleConfirmOrder}}>
    {children}
  </context1.Provider>

    </>
  )
}

export default Logcontext
