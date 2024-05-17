import "./Resultado.css";
import logo from "../../assets/logo.png";
import Card from "./componentes/Card";

export default function Resultado() {
  return (
    <>
      <section className="resultado-sec">
        <div className="resultado-logo">
          <img src={logo} width={60} />
          <span className="forms-text">
            Resultado dos 5 carros que mais se adequam a sua pesquisa!
          </span>
        </div>
        <div className="resultado-div">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
