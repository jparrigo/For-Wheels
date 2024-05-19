import { CarsListRet } from "../../assets/models/CarsListRet";
import "./Card.css";

interface CardProps {
  car: CarsListRet,
}

export default function Card(props: CardProps) {
  const car = props.car;
  return (
    <section className="card-section">
      <div className="card-content">
        <div className="card-title">
          <span>{car.Vehicle_Title_Partial}</span>
        </div>
        <div className="card-info">
          <span>Informações:</span>
          <div>
            <span>{car["Transmission Type"]}</span>
            <span>{car["Engine HP"]}</span>
            <span>{car["Vehicle Style"]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
