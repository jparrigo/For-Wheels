import './Home.css'
import LeftBar from "../../componentes/LeftBar";
import Filtro from '../../componentes/Filtro';

function Home() {
  return (
    <div className="home-div">
      <LeftBar />
      <section>
        <Filtro />
      </section>
    </div>
  )
}

export default Home;