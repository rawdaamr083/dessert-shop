import Feature from "../COMPONENTS/Feature";
import Ordernow from "../COMPONENTS/Ordernow";
import Bestproduct from "../COMPONENTS/Bestproduct";

export default function Home({login}) {
  return (
    <div >
      <Ordernow login={login}></Ordernow>
      <div style={{ fontWeight: "600",
    fontSize: "26px",
    textAlign: "center",
    margin: "2vw",
    color: "rgb(116, 83, 21)",
    height:"8vh",
    boxShadow: "0px -2px 7px 3px rgb(116 83 21 )"}}>FEATURES</div>
<Feature></Feature>
<div style={{ fontWeight: "600",
    fontSize: "26px",
    textAlign: "center",
    margin: "2vw",
    color: "rgb(116, 83, 21)",
    height:"8vh",
    boxShadow: "0px -2px 7px 3px rgb(116 83 21 )"}}>TOP ORDERS!!</div>
<Bestproduct></Bestproduct>




    </div>
  );
}