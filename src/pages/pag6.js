import './style.css';
import laura from './depoimentos/laura.jpg'
import sophia from './depoimentos/sophia.jpg'

export default function Pag6({ onAvancar }) {
  const depoimentos = [
    {
      nome: 'Laura Beatriz',
      cidade: 'Rio de Janeiro - RJ',
      foto: laura,
      texto: 'Eu simplesmente amei! Recebi o gloss da Franciny e fiquei apaixonada. Chegou super rápido e a embalagem é um charme! Uso todo dia, é meu favorito!',
    },
    {
      nome: 'Agata Sophioa',
      cidade: 'Curitiba - PR',
      foto: sophia,
      texto: 'O quiz foi super fácil, e logo depois recebi o iluminador Glow Queen. A textura é maravilhosa e realmente entrega aquele glow bonito. Obrigada, Fran!',
    },
  ];

  return (
    <div className="pagina-depoimentos">
      <h2>
        Confira os depoimentos de quem participou do nosso Quiz e recebeu os produtos da Franciny:
      </h2>

      <div className="lista-depoimentos">
        {depoimentos.map((d, i) => (
          <div key={i} className="card-depoimento">
            <div className="topo">
              <img src={d.foto} alt={d.nome} className="foto" />
              <div className="info">
                <strong>{d.nome}</strong>
                <span>{d.cidade}</span>
                <div className="estrelas">★★★★★</div>
              </div>
            </div>
            <p>{d.texto}</p>
          </div>
        ))}
      </div>

      <button className="btn-action" onClick={onAvancar}>
        Continuar
      </button>
    </div>
  );
}
