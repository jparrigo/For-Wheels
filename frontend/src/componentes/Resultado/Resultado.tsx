import './Resultado.css'
import logo from "../../assets/logo.png";

export default function Resultado() {
  return (
    <section className='resultado-sec'>
      <div className="resultado-logo">
        <img src={logo} width={60} />
        <span className="forms-text">
          Resultado do seu filtro de pesquisa
        </span>
      </div>
      <div className='resultado-div'>
        
      </div>
    </section>
  )
}