import { CarsListRet } from "../../assets/models/CarsListRet";
import "./Card.css";
import ItemInfo from "./components/ItemInfo";

interface CardProps {
  car: CarsListRet,
  index: number
}

function traduzir (car: CarsListRet) {
  car.Category = ""

  if (car["Transmission Type"] == "AUTOMATIC"){
    car["Transmission Type"] = "Automático"

  } else if (car["Transmission Type"] == "MANUAL") {
    car["Transmission Type"] = "Manual"

  } else if (car["Transmission Type"] == "AUTOMATED_MANUAL") {
    car["Transmission Type"] = "Automatizado"

  } else if (car["Transmission Type"] == "DIRECT_DRIVE") {
    car["Transmission Type"] = "Direct Drive"
  }


  if (car["Common"] == true){
    car["Category"] += "Comum, "

  } 
  if (car["Crossover"] == true){
    car["Category"] += "Crossover, "

  }
  if (car["Exotic"] == true){
    car["Category"] += "Exótico, "

  }
  if (car["Factory Tuner"] == true){
    car["Category"] += "Tuner de Fábrica, "

  }
  if (car["Hatchback"] == true){
    car["Category"] += "Hatchback, "

  }
  if (car["High-Performance"] == true){
    car["Category"] += "Alta Performance, "

  }
  if (car["Hybrid"] == true){
    car["Category"] += "Híbrido, "

  }
  if (car["Luxury"] == true){
    car["Category"] = "Luxuoso"

  }
  if (car["Performance"] == true){
    car["Category"] = "Performance"
  }



  if (car["Engine Fuel Type"] == "gasoline") {
    car["Engine Fuel Type"] = "Gasolina"

  } else if (car["Engine Fuel Type"] == "diesel") {
    car["Engine Fuel Type"] = "Diesel"

  } else if (car["Engine Fuel Type"] == "flex-fuel") {
    car["Engine Fuel Type"] = "Flex"

  } else if (car["Engine Fuel Type"] == "electric") {
    car["Engine Fuel Type"] = "Elétrico"
  }



  if (car["Vehicle Style"] == "Coupe") {
    car["Vehicle Style"] = "Cupê"

  } else if (car["Vehicle Style"] == "Convertible") {
    car["Vehicle Style"] = "Conversível"

  } else if (car["Vehicle Style"] == "Hatchback") {
    car["Vehicle Style"] = "Hatch"

  } else if (car["Vehicle Style"] == "Pickup") {
    car["Vehicle Style"] = "Picape"

  } else if (car["Vehicle Style"] == "Wagon") {
    car["Vehicle Style"] = "Perua"

  } else if (car["Vehicle Style"] == "Minivan") {
    car["Vehicle Style"] = "Mini Van"
  }

  return car;
}

export default function Card(props: CardProps) {

  let car = props.car;
  car = traduzir(car)


  return (
    <section className="card-section">
      <span style={{ fontSize: 20 }}>{props.index+1 +'º'}</span>
      <div className="card-content">
        <div className="card-title">
          <span style={{ fontWeight:"bolder", fontSize: 22  }}>{car.Vehicle_Title_Partial}</span>
        </div>
        <div className="card-info">
          <span className="card-info-title">Ficha Técnica</span>
          <div style={{display: "flex",justifyContent: 'center', flexDirection: 'column'}}>
            <ItemInfo title="Preço" info={`$${car.MSRP}`}/>
            <ItemInfo title="Transmissão" info={car["Transmission Type"]}/>
            <ItemInfo title="Potência" info={car["Engine HP"]+"cv"}/>
            <ItemInfo title="Combustível" info={car["Engine Fuel Type"]}/>
            <ItemInfo title="Carroceria" info={car["Vehicle Style"]}/>
            <ItemInfo title="Categoria" info={car["Category"]}/>
            <ItemInfo title="N° de Portas" info={car["Number of Doors"]}/>
          </div>
        </div>
      </div>
    </section>
  );
}
