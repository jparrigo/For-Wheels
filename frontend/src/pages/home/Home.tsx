import "./Home.css";
import LeftBar from "../../componentes/LeftBar";
import Resultado from "../../componentes/Resultado/Resultado";

function Home() {
  return (
    <nav className="home-nav">
      <LeftBar />
      <Resultado />
    </nav>
  );
}

export default Home;
