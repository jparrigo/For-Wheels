import { CarsListRet } from "../../assets/models/CarsListRet";
import "./Card.css";

interface CardProps {
  car: CarsListRet,
  index: number
}

export default function Card(props: CardProps) {
  const car = props.car;
  return (
    <section className="card-section">
      <span style={{ fontSize: 20 }}>{props.index+1 +'º'}</span>
      <div className="card-content">
        <div className="card-title">
          <span style={{ fontWeight:"bolder", fontSize: 22  }}>{car.Vehicle_Title_Partial}</span>
        </div>
        <div className="card-info">
          <span className="card-info-title">Ficha Técnica:</span>
          <div style={{display: "flex",justifyContent: 'center', flexDirection: 'column'}}>
            <span>- {car["Transmission Type"]}</span>
            <span>- {car["Engine HP"]}cv</span>
            <span>- {car["Vehicle Style"]}</span>
            <span>- {car["Number of Doors"]}</span>
            <span>- {car["Transmission Type"]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
