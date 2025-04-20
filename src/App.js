import { useState } from 'react';
import QuizIntro from './pages/inicio';
import Pergunta1 from './pages/pag1';
import Pergunta2 from './pages/pag2';
import Pag3 from './pages/pag3';
import Pag4 from './pages/pag4';
import Pag5 from './pages/pag5';
import Pag6 from './pages/pag6';
import Pag7 from './pages/pag7';
import Navbar from './componentes/nav';
import './App.css';
import PixelKawaii from './pixel';

function App() {
  const [progresso, setProgresso] = useState(20);
  const [tela, setTela] = useState('intro');
  const [animando, setAnimando] = useState(false);

  const handleAvancar = () => {
    setAnimando(true);

    setTimeout(() => {
      setProgresso((prev) => Math.min(prev + 20, 100));

      if (tela === 'intro') setTela('pergunta1');
      else if (tela === 'pergunta1') setTela('pergunta2');
      else if (tela === 'pergunta2') setTela('pag3');
      else if (tela === 'pag3') setTela('pag4');
      else if (tela === 'pag4') setTela('pag5');
      else if (tela === 'pag5') setTela('pag6');
      else if (tela === 'pag6') setTela('pag7');
      setAnimando(false);
    }, 300);
  };

  const getTelaAtual = () => {
    if (tela === 'intro') return <QuizIntro onAvancar={handleAvancar} />;
    if (tela === 'pergunta1') return <Pergunta1 onAvancar={handleAvancar} />;
    if (tela === 'pergunta2') return <Pergunta2 onAvancar={handleAvancar} />;
    if (tela === 'pag3') return <Pag3 onAvancar={handleAvancar} />;
    if (tela === 'pag4') return <Pag4 onAvancar={handleAvancar} />;
    if (tela === 'pag5') return <Pag5 onAvancar={handleAvancar} />;
    if (tela === 'pag6') return <Pag6 onAvancar={handleAvancar} />;
    if (tela === 'pag7') return < Pag7/>;

    // Tela final
    return (
      <div style={{ padding: 20 }}>
        <h2>Obrigado por participar!</h2>
      </div>
    );
  };

  return (
    <div>
    <PixelKawaii />
    {tela !== 'pag7' && <Navbar progresso={progresso} />}
      <div className={`tela-animada ${animando ? 'fade-out' : 'fade-in'}`}>
        {getTelaAtual()}
      </div>
    </div>
  );
}

export default App;
