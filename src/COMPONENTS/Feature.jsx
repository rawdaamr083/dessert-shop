import f from "../style/features.module.css"
function Feature() {
  const featuresData = [
  {
    id: 1,
    icon: "🥐", // أو اسم كلاس FontAwesome زي "fa-solid fa-cookie-bite"
    title: "Fresh Daily",
    description: "All our oriental sweets and desserts are baked fresh every single morning."
  },
  {
    id: 2,
    icon: "🚚", // أو "fa-solid fa-truck-fast"
    title: "Fast Delivery",
    description: "Delivered straight to your doorstep fresh, clean, and in under 45 minutes."
  },
  {
    id: 3,
    icon: "🧈", // أو "fa-solid fa-award"
    title: "100% Pure Ghee",
    description: "We use authentic Egyptian butter and premium organic ingredients only."
  },
  {
    id: 4,
    icon: "🎁", // أو "fa-solid fa-gift"
    title: "Special Gift Boxes",
    description: "Customized dessert boxes designed perfectly for all your family gatherings."
  }
];

  return (
    <>
    <div className={f.main}>
{featuresData.map((item)=>(
 <div className={f.card} key={item.id}>
      <div className={f.img}>{item.icon}</div>
      <h1 className={f.title}>{item.title}</h1>
      <p className={f.description}>{item.description}</p>







      </div>
))}
      </div>
    </>
  )
}

export default Feature
