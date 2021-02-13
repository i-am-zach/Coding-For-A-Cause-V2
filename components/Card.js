import react from 'react';

function Card({ title="Default Title", subtitle="Default subtitle" }) {
  return (
    <div className="card">
      <h3 className="card-title">{ title }</h3>
      <p className="card-subtitle">
        { subtitle }
      </p>
    </div>
  );
}

export default Card;