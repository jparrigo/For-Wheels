import "./Card.css";

interface CardProps {
  nome: string,

}

export default function Card(props: CardProps) {
  return (
    <section className="card-section">
      <div className="card-content">
        <div className="card-title">
          <span>{props.nome}</span>
        </div>
        <div className="card-info">
          <span>Informações:</span>
          <div>
            <span>Modelo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
