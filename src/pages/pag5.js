import './style.css';

const produtos = [
  {
    nome: 'KIT FRAN GLOSSLICIOUS BY FRANCINY EHLKE',
    imagem: 'https://cdn.iset.io/assets/70914/produtos/199/medida-ecomm-fran-kit-glosslicious-prancheta-1-01.jpg',
  },
  {
    nome: 'GLOSS FRAN BY FRANCINY EHLKE LIPHONEY',
    imagem: 'https://cdn.iset.io/assets/70914/produtos/204/lip-honey-fran-by-fr-01.jpg',
  },
  {
    nome: 'Base Mate Real Filter 30g - FRANCINY EHLKE',
    imagem: 'https://cdn.awsli.com.br/2500x2500/2569/2569686/produto/216476854/1994-base-mate-real-filter-fran-by-franciny-ehlke-1644374997-bjxjfqp62o.jpg',
  },
  {
    nome: 'Kit Fran #CHILLIKIT - FRANCINY EHLKE',
    imagem: 'https://cdn.awsli.com.br/2500x2500/2569/2569686/produto/258822625/chilliki-1-9qbtlprqd6.png',
  },
  {
    nome: 'Balm Scrub Stick Bamboo - FRANCINY EHLKE',
    imagem: 'https://cdn.awsli.com.br/2500x2500/2569/2569686/produto/241602033/anyconv-com__7898969501903-0-dlvskuztx0.jpg',
  },
  {
    nome: 'Paleta Iluminadores Fran Gritani - FRANCINY EHLKE',
    imagem: 'https://cdn.awsli.com.br/2500x2500/2569/2569686/produto/258824982/paleta-iluminadores-fran-gritani---franciny-ehlke-1-v5nn2ilt6y.png',
  }
];

export default function Pag5({ onAvancar }) {
  return (
    <div className="pagina-catalogo">
    <h2>Qual desses produtos da Franciny você gostaria de ganhar hoje?</h2>
      <div className="grade-produtos">
        {produtos.map((item, i) => (
          <button key={i} className="card-produto" onClick={onAvancar}>
            <img src={item.imagem} alt={item.nome} />
            <p>{item.nome}</p>
            <span className="arrow">➜</span>
          </button>
        ))}
      </div>
    </div>
  );
}
