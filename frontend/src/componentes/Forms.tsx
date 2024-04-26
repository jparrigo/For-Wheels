import "./Forms.css";
import logo from "../assets/logo.png";
import FieldSlider from "./FieldSlider";
import FieldTextInput from "./FieldTextInput";
import { Checkbox, ConfigProvider, Input, Radio, Select, Space } from "antd";

const preferenciaDeUso = [
  {label: 'Estrada', value: 'highway mpg'},
  {label: 'Cidade', value: 'city mpg'}
]

const transmissao = [
  {label: 'Automatico', value: 'AUTOMATIC'},
  {label: 'Manual', value: 'MANUAL'},
  {label: 'Automatizado', value: 'AUTOMATED_MANUAL'},
  {label: 'Direct Drive', value: 'DIRECT_DRIVE'}
]

const combustivel = [
  {label: 'Gasolina', value: 'gasolina'},
  {label: 'Flex', value: 'flex'},
  {label: 'Diesel', value: 'diesel'},
  {label: 'Elétrico', value: 'eletrico'}
]

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
        <section>
          <h1>Faixa de preço do veículo</h1>
          <Space.Compact>
            <Input placeholder="de"/>
            <Input placeholder="até"/>
          </Space.Compact>
        </section>
        <section>
          <h1>Preferência de uso</h1>
          <ConfigProvider theme={{token: {colorText: "#FFFFFF"}}}>
            <Checkbox.Group defaultValue={['highway mpg']} options={preferenciaDeUso}/>
          </ConfigProvider>
        </section>
        <section>
          <h1>Tamanho</h1>
          <Radio.Group value="midsize">
            <Radio.Button value="midsize">Pequeno</Radio.Button>
            <Radio.Button value="compact">Médio</Radio.Button>
            <Radio.Button value="large">Grande</Radio.Button>
          </Radio.Group>
        </section>
        <section>
          <h1>Transmissão</h1>
          <ConfigProvider theme={{token: {colorText: "#FFFFFF"}}}>
            <Checkbox.Group defaultValue={['AUTOMATIC']} options={transmissao}/>
          </ConfigProvider>
        </section>
        <section>
          <h1>Combustível</h1>
          <ConfigProvider theme={{token: {colorText: "#FFFFFF"}}}>
            <Checkbox.Group defaultValue={['gasolina']} options={combustivel}/>
          </ConfigProvider>
        </section>
        <section>
          <h1>Categoria</h1>
        </section>
        <section>
          <h1>Estilo</h1>
        </section>
        <h1>Parte Avançada</h1>
        <section>
          <h1>Marca</h1>
        </section>
        <section>
          <h1>Ano</h1>
        </section>
        <section>
          <h1>Potência em HP</h1>
        </section>
        <section>
          <h1>Direção</h1>
        </section>
        <section>
          <h1>Cilíndros</h1>
        </section>
      </div>
    </div>
  );
}
