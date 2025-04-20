import './style.css';

export default function Pergunta1({ onAvancar }) {
  return (
    <div className="quiz-intro">
      <h2>O que você vai receber ao participar do quiz:</h2>

      <p>
        Ao participar do <strong>quiz oficial da Franciny Ehlke</strong>, você poderá 
        <strong> escolher até 2 produtos exclusivos da Fran</strong> — totalmente <strong>GRÁTIS</strong>, pagando apenas a <strong>taxa de entrega</strong>.
      </p>

      <p><strong>O que você vai receber?</strong></p>
      <ul>
        <li>Até dois produtos incríveis da linha oficial da Franciny</li>
        <li>Enviados para o seu endereço com entrega rápida</li>
        <li>Itens exclusivos que não são vendidos em lojas</li>
      </ul>

      <p><strong>Mas atenção: essa ação é por tempo limitado e válida enquanto durar o estoque!</strong></p>

      <button className="btn-action" onClick={onAvancar}>
        Continuar
      </button>
    </div>
  );
}
