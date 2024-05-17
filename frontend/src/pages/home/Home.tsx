import "./Home.css";
import LeftBar from "../../componentes/LeftBar";
import Forms from "../../componentes/Forms";

function Home() {
  return (
    <nav className="home-nav">
      <LeftBar />
      <Forms />
    </nav>
  );
}

export default Home;
