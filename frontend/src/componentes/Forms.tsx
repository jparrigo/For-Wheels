import "./Forms.css";
import logo from "../assets/logo.png";
import FieldSlider from "./FieldSlider";
import FieldTextInput from "./FieldTextInput";

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
        <FieldTextInput
          title="Faixa de preço do veículo"
          firstText="de"
          secondText="até"
        />
        <FieldSlider title="Tamanho" />
      </div>
    </div>
  );
}
