import './style.css';

export default function Pag4({ onAvancar }) {
  const opcoes = [
    "Sim, comprei pelo site oficial",
    "Sim, comprei em loja física",
    "Comprei em marketplaces (ex: Shopee, Amazon)",
    "Ainda não comprei"
  ];

  return (
    <div className="quiz-intro">
      <h2>Você já comprou algum produto da Franciny?</h2>

      {opcoes.map((texto, i) => (
        <button key={i} className="resposta-btn" onClick={onAvancar}>
          <span>{texto}</span>
          <span>➜</span>
        </button>
      ))}
    </div>
  );
}
