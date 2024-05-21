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
