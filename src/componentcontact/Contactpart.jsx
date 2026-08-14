 import con from "../style/contact.module.css"
 function Contactpart() {
  return (
    <div  className={con.main}>
        <div className={con.text}>
            <h1>Contact Us</h1>
           <h2>Baked with Love, Crafted for Your Sweetest Moments ✨</h2>
  <p>
    At [dessert shop], we don’t just bake treats—we create sweet memories! 
    Every dessert we make starts with a genuine passion for detail and beauty.
  </p>
  <h3>How to contact with us</h3>
  <h4 className={con.contactinfo}>tel:24246399
    <br></br>
    email:dessert@ gmail.com
    <br></br>
    watsapp:0111256787
    <br></br>
    facebookpage:https://dessert
    <br></br>
    youtubechannel:dessert.youtube</h4>
        </div>
        <div className={con.image}></div>
     
    </div>
  );
}
export default Contactpart