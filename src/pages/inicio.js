import './style.css';
import kit from './kit.png';

export default function QuizIntro({ onAvancar }) {
  return (
    <div className="quiz-intro">
      <h2>
        A FRAN quer ouvir você! <br />
        <strong>Receba um Kit da Franciny Exclusivo GRÁTIS! 🎁</strong>
      </h2>

      <p>
        Estamos sempre buscando melhorar nossos produtos e, por isso, queremos saber a sua opinião!
        <br /><br />
        Criamos um <strong>quiz especial</strong> com algumas perguntas rápidas — e como agradecimento, você poderá
        <strong> escolher 2 produtos da Fran para testar</strong>, <strong>pagando</strong> apenas o frete.
        <br /><br />
        Essa é uma chance única de conhecer itens exclusivos que não são vendidos em lojas.
        <strong> Mas atenção:</strong> a promoção é por tempo limitado!
      </p>

      <img src={kit} className="promo-img" alt="Kit Franciny" />

      <button className="btn-action" onClick={onAvancar}>Participe agora!</button>
    </div>
  );
}
