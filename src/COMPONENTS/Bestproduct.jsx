import B from "../style/best.module.css"
import { useContext } from "react";
import { context1 } from "../context/Logcontext";
function Bestproduct() {
  // add to cart => to  give me price
  // add =>  make items  that select in selected item
  //alert fun=> بتخليه يعمل alert في حاله اننا  بنحاول نشتري واحنا مش log in
  //use state  to log in
  const {islog,alertfun,addtocart,add}=useContext(context1)
 
   const dessertsData = [
  {
    id: 1,
    title: "Classic Nabulsi Kunafa",
    description: "Crispy golden shredded pastry filled with rich melted Nabulsi cheese, soaked in sweet aromatic syrup.",
    price: 180, // Price in EGP
    image: "/images/knafa.jpg"
  },
  {
    id: 2,
    title: "Nut Mixed Basbousa",
    description: "Traditional Egyptian semolina cake baked with pure ghee, garnished with roasted almonds and hazelnuts.",
    price: 150,
    image: "/images/basbosa.jpg"
  },
  {
    id: 3,
    title: "Egyptian Om Ali",
    description: "Warm baked puff pastry pudding drenched in rich cream, fresh milk, raisins, and toasted nuts.",
    price: 120,
    image: "/images/amali.jpg"
  },
  {
    id: 4,
    title: "Cream Baked Rice Pudding",
    description: "Creamy Egyptian rice pudding cooked with organic milk, topped with a caramelized baked cream layer.",
    price: 90,
    image: "/images/mahrok.jpg"
  },
  {
    id: 5,
    title: "Pistachio Baklava Fingers",
    description: "Flaky layers of crispy phyllo dough stuffed with finely ground premium Gaziantep pistachios.",
    price: 220,
    image: "/images/golash.jpg"
  },
  {
    id: 6,
    title: "Stuffed Crispy Qatayef",
    description: "Golden fried sweet dumplings filled with whipped fresh cream (Ashta) and crushed pistachios.",
    price: 130,
    image: "/images/Qatayef.webp"
  }
];

  return (
    <>
       <div className={B.mainbest}>
      {dessertsData.map((item)=>(
       <div className={B.cardbest} key={item.id}>
            <img src={item.image}></img>
            <h1 className={B.title}>{item.title}</h1>
            <p className={B.description}>{item.description}</p>
      <h2 className={B.price}>{item.price}EGp</h2>
      <button className={B.button}
      onClick={islog?()=>{addtocart(item.price)
         add(item)
          
      }:alertfun}
            
      >addto card🛒</button>
      
      
      
      
      
            </div>
      ))}
            </div>
          </>
  
    )
}

export default Bestproduct

