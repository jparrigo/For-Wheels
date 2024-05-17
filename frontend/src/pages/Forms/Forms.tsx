import "./Forms.css";
import logo from "../../assets/logo.png";
import {Button, Checkbox, ConfigProvider, Input, Radio, Space } from "antd";
import { useState } from "react";
import LeftBar from "../../componentes/LeftBar/LeftBar";
import { useNavigate } from "react-router-dom";

const preferenciaDeUso = [
  { label: "Estrada", value: "highway mpg" },
  { label: "Cidade", value: "city mpg" },
];

const tamanho = [
  { label: "Pequeno", value: "midsize" },
  { label: "Médio", value: "compact" },
  { label: "Grande", value: "large" },
]

const transmissao = [
  { label: "Automatico", value: "AUTOMATIC" },
  { label: "Manual", value: "MANUAL" },
  { label: "Automatizado", value: "AUTOMATED_MANUAL" },
  { label: "Direct Drive", value: "DIRECT_DRIVE" },
];

const combustivel = [
  { label: "Gasolina", value: "gasolina" },
  { label: "Flex", value: "flex" },
  { label: "Diesel", value: "diesel" },
  { label: "Elétrico", value: "eletrico" },
];

const categoria = [
  { label: "Comum", value: "Common" },
  { label: "Crossover", value: "Crossover" },
  { label: "Exótico", value: "Exotic" },
  { label: "Tuner de Fábrica", value: "Factory Tuner" },
  { label: "Hatchback", value: "Hatchback" },
  { label: "Alta performance", value: "High-Performance" },
  { label: "Híbrido", value: "Hybrid" },
  { label: "Luxuoso", value: "Luxury" },
  { label: "Performance", value: "Performance" },
];

const estilo = [
  { label: "Sedan", value: "Sedan" },
  { label: "SUV", value: "SUV" },
  { label: "Cupê", value: "Coupe" },
  { label: "Hatch", value: "Hatchback" },
  { label: "Conversível", value: "Covertible" },
  { label: "Picape", value: "Pickup" },
  { label: "Caminhão", value: "Wagon" },
  { label: "Mini Van", value: "Minivan" },
];

export default function Forms() {
  const [precoDe, setPrecoDe] = useState(0)
  const [precoAte, setPrecoAte] = useState(0)
  const [preferenciaDeUsoState, setPreferenciaDeUsoState] = useState('highway mpg')
  const [tamanhoState, setTamanhoState] = useState('midsize')
  const [transmissaoState, setTransmissaoState] = useState('AUTOMATIC')
  const [combustivelState, setCombustivelState] = useState('gasolina')
  const [categoriaState, setCategoriaState] = useState(['Common'])
  const [estiloState, setEstiloState] = useState('Sedan')

  const navigate = useNavigate();

  function pesquisarCarro() {
    let precoList = [precoDe,precoAte]
    if (Number.isNaN(precoDe)) {
      precoList[0] = 0;
    } else if (Number.isNaN(precoAte)) {
      precoList[1] = 0;
    }

    const carro = {
      preco: precoList,
      preferencia: preferenciaDeUsoState,
      tamanho: tamanhoState,
      transmissao: transmissaoState,
      combustivel: combustivelState,
      categoria: categoriaState,
      estilo: estiloState
    }
    console.log(carro);
    navigate('/resultado');
  }

  return (
    <nav className="home-nav">
      <LeftBar />
      <div className="forms-div">
        <div className="forms-logo">
          <img src={logo} width={60} />
          <span className="forms-text">
            Qual carro está procurando desta vez?
          </span>
        </div>
        <div className="forms-fields">
          <section>
            <h1>Faixa de preço do veículo</h1>
            <Space.Compact>
              <Input type="number" value={precoDe} onChange={({target: {valueAsNumber}}) => {
                setPrecoDe(valueAsNumber)
              }} placeholder="de" />
              <Input type="number" value={precoAte} onChange={({target: {valueAsNumber}}) => {
                console.log(valueAsNumber);
                
                setPrecoAte(valueAsNumber)
              }} placeholder="até" />
            </Space.Compact>
          </section>
          <section>
            <h1>Preferência de uso</h1>
            <ConfigProvider theme={{ token: { colorText: "#FFFFFF" } }}>
              <Radio.Group
                onChange={({target: { value }}) => {
                  setPreferenciaDeUsoState(value);
                }}
                value={preferenciaDeUsoState}
                options={preferenciaDeUso}
              />
            </ConfigProvider>
          </section>
          <section>
            <h1>Tamanho</h1>
            <ConfigProvider theme={{ token: { colorText: "#FFFFFF" } }}>
              <Radio.Group
                onChange={({target: { value }}) => {
                  setTamanhoState(value);
                }} 
                value={tamanhoState} 
                options={tamanho}/>
            </ConfigProvider>
          </section>
          <section>
            <h1>Transmissão</h1>
            <ConfigProvider theme={{ token: { colorText: "#FFFFFF" } }}>
              <Radio.Group
                onChange={({target: { value }}) => {
                  setTransmissaoState(value);
                }}
                value={transmissaoState}
                options={transmissao}
              />
            </ConfigProvider>
          </section>
          <section>
            <h1>Combustível</h1>
            <ConfigProvider theme={{ token: { colorText: "#FFFFFF" } }}>
              <Radio.Group
                onChange={({target: { value }}) => {
                  setCombustivelState(value);
                }}
                value={combustivelState} 
                options={combustivel} />
            </ConfigProvider>
          </section>
          <section>
            <h1>Categoria</h1>
            <ConfigProvider theme={{ token: { colorText: "#FFFFFF" } }}>
              <Checkbox.Group
                onChange={setCategoriaState}
                defaultValue={categoriaState}
                options={categoria} />
            </ConfigProvider>
          </section>
          <section>
            <h1>Estilo</h1>
            <ConfigProvider theme={{ token: { colorText: "#FFFFFF" } }}>
              <Radio.Group
                onChange={({target: { value }}) => {
                  setEstiloState(value);
                }}
                value={estiloState} 
                options={estilo} />
            </ConfigProvider>
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
        <Button
          style={{marginTop: 10, paddingLeft: 40, paddingRight: 40}} 
          type="primary" 
          size="large" 
          onClick={pesquisarCarro}>Recomendar 5 carros</Button>
      </div>
    </nav>
  );
}
