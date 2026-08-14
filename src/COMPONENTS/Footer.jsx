import styles from"../style/Footer.module.css"
function Footer() {
  

  return (
    <>
      
      <div className={styles.Footer}>
    <div className={styles.in}>
<div className={styles.contactinfo}>
    tel:24246399
    <br></br>
    email:dessert@ gmail.com
    <br></br>
    watsapp:0111256787
    <br></br>
    facebookpage:https://dessert
    <br></br>
    youtubechannel:dessert.youtube
</div>
<div className={styles.social}>
        pages
<ul>
    <li>home</li>
    <li>log</li>
    <li>contact</li>
    <li>products</li>
</ul>
</div>


    </div>
    <div className={styles.copyright}>@allcopyRights saved
        <br></br>
         <i className="fa-solid fa-cookie-bite fa-width-auto"style={{color:" #a32b5582"}} ></i>DESSERT SHOP
    </div>





      </div>
    </>
  )
}

export default Footer
