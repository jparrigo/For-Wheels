import "./Resultado.css";
import logo from "../../assets/logo.png";
import Card from "../../componentes/Cards/Card";
import LeftBar from "../../componentes/LeftBar/LeftBar";
import { useLocation } from "react-router-dom";
import { CarsListRet } from "../../assets/models/CarsListRet";

export default function Resultado() {
  const params = useLocation().state
  const cars = params.listCars;
  console.log(params.listCars);
  
  return (
    <nav className="home-nav">
      <LeftBar />
      <section className="resultado-sec">
        <div className="resultado-logo">
          <img src={logo} width={60} />
          <span className="forms-text">
            Resultado dos 5 carros que mais se adequam a sua pesquisa!
          </span>
        </div>
        <div className="resultado-div">
          {
            cars.map((item: CarsListRet,i: number) => {
              return <Card key={i} car={item}/>
            })
          }
        </div>
      </section>
    </nav>
  );
}
