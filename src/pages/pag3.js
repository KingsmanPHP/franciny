import './style.css';

export default function Pag3({ onAvancar }) {
  const opcoes = [
    "Sim, já usei e amei!",
    "Sim, mas usei só uma vez",
    "Ainda não usei, mas conheço",
    "Nunca usei, estou conhecendo agora"
  ];

  return (
    <div className="quiz-intro">
      <h2>Você já usou algum produto da Franciny?</h2>

      {opcoes.map((texto, i) => (
        <button key={i} className="resposta-btn" onClick={onAvancar}>
          <span>{texto}</span>
          <span>➜</span>
        </button>
      ))}
    </div>
  );
}
