import "./Forms.css";
import logo from "../assets/logo.png";
import Field from "./Field";

export default function Forms() {
  return (
    <div className="forms-div">
      <div className="forms-logo">
        <img src={logo} width={100} />
        <span className="forms-text">
          Qual carro está procurando desta vez?
        </span>
      </div>
      <div className="forms-fields">
        <Field type='price' title="Faixa de preço do veículo" />
        <Field type='size' title="Tamanho" />
      </div>
    </div>
  );
}
