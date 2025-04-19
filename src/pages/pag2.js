import './style.css';
import { FaChevronRight } from 'react-icons/fa';

export default function Pergunta2({ onAvancar }) {
  const respostas = [
    "Alta durabilidade e brilho intenso",
    "Fórmulas veganas e cruelty-free",
    "Aroma agradável e sensação confortável nos lábios",
    "Design moderno e embalagem linda"
  ];

  return (
    <div className="quiz-intro">

      <h2>Qual o principal motivo para você escolher o gloss da Franciny?</h2>

      {respostas.map((texto, index) => (
        <button key={index} className="resposta-btn" onClick={onAvancar}>
          <span>{texto}</span>
          <FaChevronRight className="icone" />
        </button>
      ))}
    </div>
  );
  
}
