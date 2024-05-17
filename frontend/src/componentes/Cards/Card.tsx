import "./Card.css";

interface CardProps {
  nome?: string,

}

export default function Card(props: CardProps) {
  return (
    <section className="card-section">
      <div className="card-content">
        <div className="card-title">
          <span>Chevrolet Onix RS 1.0 Turbo</span>
        </div>
        <div className="card-info">
          <span>Informações:</span>
        </div>
      </div>
    </section>
  );
}