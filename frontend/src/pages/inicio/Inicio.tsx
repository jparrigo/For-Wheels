import './Inicio.css'
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

function Inicio () {
  const navigate = useNavigate();
  return (
    <div className="inicio-div">
      <img src={logo} />
      <p>Seja bem vindo ao 4Wheels, uma IA que irá te ajudar a achar o melhor carro para você de acordo com a sua preferência.</p>
      <button onClick={() => navigate('/forms')}>Vamos começar</button>
    </div>
  )
}

export default Inicio;