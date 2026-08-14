import { useState, useEffect, useContext } from "react";
import p from "../style/product.module.css";
import { context1 } from "../context/Logcontext";

function Productsection() {
  const [query, setquery] = useState("");
  const [select, setselect] = useState(null);
  const [showmodel, setshow] = useState(false);
  const { islog, alertfun, addtocart, card, add } = useContext(context1);





//1️⃣ State للـ Data وحالة التحميل
  const [dessertsData, setDessertsData] = useState([]);
  const [loading, setLoading] = useState(true);
//////////////////
  // 2️⃣ جلب البيانات من products.json
  useEffect(() => {
    fetch("/src/Database.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
        //convert from json to object
      })
      .then((data) => {
        //data finall that get  acess as object to get dessertdata
        setDessertsData(data.dessertsData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading products JSON:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", margin: "50px 0" }}>Loading Products... 🍪</h2>;
  }


const filteredProducts = dessertsData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );



  return (
    <div>
      <input
        type="search"
        placeholder="search🔍"
        className={p.input}
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />

      <div className={p.divide}>
        <div className={p.main}>
          {filteredProducts.map((item) => (
            <div className={p.cardpro} key={item.id}>
              <img src={item.image} alt={item.title} />
              <h1 className={p.title}>{item.title}</h1>
              <p className={p.description}>{item.description}</p>
              <h2 className={p.price1}>{item.price} EGP</h2>
              <div style={{ display: "flex" }}>
                <button
                  className={p.button}
                  onClick={
                    islog
                      ? () => {
                          addtocart(item.price);
                          add(item);
                        }
                      : alertfun
                  }
                >
                  Add to cart 🛒
                </button>
                <button
                  className={p.button}
                  onClick={() => {
                    setshow(true);
                    setselect(item);
                  }}
                >
                  View details:
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart section */}
        <div className={p.cartpro}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="Shopping Cart"
            style={{ width: "120px", height: "auto", margin: "0 auto", display: "block" }}
          />
          <div className={p.price2}>total Price:{card}</div>
        </div>
      </div>

      {/* Modal / Popup section (رجّعنا زرار add to cart زي كودك الأصلي تماماً) */}
      {showmodel && select ? (
        <div className={p.overlay}>
          <div className={p.pop}>
            <img src={select.image} alt={select.title} />
            <div className={p.all}>
              <h1 className={p.title}>{select.title}</h1>
              <p className={p.description}>{select.description}</p>
              <h2 className={p.price1} style={{ marginLeft: "2px" }}>
                {select.price} EGP
              </h2>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button onClick={() => setshow(false)}>close</button>
                <button
                  onClick={islog ? () => { addtocart(select.price); } : alertfun}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Productsection;