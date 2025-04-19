import './style.css';
import kit from './kit.png';
export default function QuizIntro({ onAvancar }) {
  return (
    <div className="quiz-intro">
      <h2>
        A FRAN quer ouvir você!: <br />
        <strong>Receba um Kit da Franciny Exclusivo GRÁTIS! 🎁</strong>
      </h2>

      <p>
        Estamos sempre buscando melhorar nossos produtos e, por isso, queremos saber a sua opinião!
        <br /><br />
        Para isso, criamos um <strong>quiz especial</strong> onde você responde algumas perguntas rápidas.
        <br /><br />
        Sua opinião é muito importante para nós, e essa é a nossa forma de agradecer! <strong>Mas atenção: </strong>
        a promoção é por tempo limitado!
      </p>

      <img src={kit} className='promo-img'/>

      <button className="btn-action" onClick={onAvancar}>Participe agora!</button>
      
    </div>
  );
}
