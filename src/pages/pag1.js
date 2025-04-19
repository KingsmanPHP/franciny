import './style.css';

export default function Pergunta1({ onAvancar }) {
  return (
    <div className="quiz-intro">
      <h2>O que você vai receber ao participar do quiz:</h2>

      <p>
        Ao participar do <strong>quiz oficial da Franciny Ehlke</strong>, você ganha
        <strong> 2 produtos exclusivos da Fran</strong>, totalmente <strong>GRÁTIS!</strong>
      </p>

      <p><strong>O que você vai receber?</strong></p>
      <ul>
        <li>Dois produtos incríveis da linha oficial da Franciny</li>
        <li>Enviados para o seu endereço com frete rápido</li>
        <li>Itens exclusivos não vendidos em lojas</li>
      </ul>

      <p><strong>Mas atenção! Essa ação é por tempo limitado.</strong></p>

      <button className="btn-action" onClick={onAvancar}>
        Continuar
      </button>
    </div>
  );
}
