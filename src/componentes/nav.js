import { Link } from 'react-router-dom';
import logo from './logo.png';
import './nav.css';
import { useEffect, useState } from 'react';

function Navbar({progresso}) {
  const [tempoRestante, setTempoRestante] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // limpa o intervalo ao desmontar
  }, []);

  const formatarTempo = (segundos) => {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
  };

  return (
    <nav>
      <div className='tep'>
      <div className="tempo">Tempo restante para a oferta acabar: {formatarTempo(tempoRestante)}</div>
      </div>
      <img src={logo}></img>
      <div className='shield'>
        <div className="shieldfill" style={{ width: `${progresso}%` }}></div>
      </div>
    </nav>
  );
}

export default Navbar;
