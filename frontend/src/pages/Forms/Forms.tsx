import "./Forms.css";
import logo from "../../assets/logo.png";
import {Button, Checkbox, ConfigProvider, Input, Radio, Space, message } from "antd";
import { useState } from "react";
import LeftBar from "../../componentes/LeftBar/LeftBar";
import { useNavigate } from "react-router-dom";
import setListCarsSaves from "../../assets/functions/setListCarsSaves";
import axios, { AxiosError } from "axios";

const preferenciaDeUso = [
  { label: "Estrada", value: "highway mpg" },
  { label: "Cidade", value: "city mpg" },
];

const tamanho = [
  { label: "Pequeno", value: "Compact" },
  { label: "Médio", value: "Midsize" },
  { label: "Grande", value: "Large" },
]

const transmissao = [
  { label: "Automatico", value: "AUTOMATIC" },
  { label: "Manual", value: "MANUAL" },
  { label: "Automatizado", value: "AUTOMATED_MANUAL" },
  { label: "Direct Drive", value: "DIRECT_DRIVE" },
];

const combustivel = [
  { label: "Gasolina", value: "gasoline" },
  { label: "Flex", value: "flex-fuel" },
  { label: "Diesel", value: "diesel" },
  { label: "Elétrico", value: "eletric" },
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
  const [tamanhoState, setTamanhoState] = useState('Compact')
  const [transmissaoState, setTransmissaoState] = useState('AUTOMATIC')
  const [combustivelState, setCombustivelState] = useState('gasoline')
  const [categoriaState, setCategoriaState] = useState(['Common'])
  const [estiloState, setEstiloState] = useState('Sedan')

  const navigate = useNavigate();

  async function pesquisarCarro() {
    if (precoDe>precoAte || Number.isNaN(precoAte) || precoDe < 0 || precoAte < 0) {
      message.warning('Insira a Faixa de Preço corretamente.');

    } else {
      if (Number.isNaN(precoDe)) {
        setPrecoDe(0)
      }

      if (Number.isNaN(precoAte)) {
        setPrecoAte(0)
      }

      const category = []

      category.push(categoriaState.includes('Common') ? true : false)
      category.push(categoriaState.includes('Crossover') ? true : false)
      category.push(categoriaState.includes('Exotic') ? true : false)
      category.push(categoriaState.includes('Factory Tuner') ? true : false)
      category.push(categoriaState.includes('Hatchback') ? true : false)
      category.push(categoriaState.includes('High-Performance') ? true : false)
      category.push(categoriaState.includes('Hybrid') ? true : false)
      category.push(categoriaState.includes('Luxury') ? true : false)
      category.push(categoriaState.includes('Performance') ? true : false)

      const carro = {
        "min_price": precoDe,
        "max_price": precoAte,
        "city_preference": preferenciaDeUsoState == "city mpg"? true : false,
        "size": tamanhoState,
        "transmission": transmissaoState,
        "fuel": combustivelState,
        "category": category,
        "style": estiloState
      }
      console.log(carro);
      try {
        const getRecommendation = await axios.post('http://127.0.0.1:5000/cars/get-recommendation', carro)

        setListCarsSaves(getRecommendation.data);
        navigate('/resultado',{state: { listCars: getRecommendation.data }});
      } catch (err) {
        message.error('Não foi possível recomendar. Altera os parâmetros da busca.')
      }
    }
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
        </div>
        <Button
          style={{alignContent:'start',marginBottom: 30, marginTop: 20 , paddingLeft: 40, paddingRight: 40}} 
          type="primary" 
          size="large" 
          onClick={pesquisarCarro}>Recomendar 5 carros</Button>
      </div>
    </nav>
  );
}
