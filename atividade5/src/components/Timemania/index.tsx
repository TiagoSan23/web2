/*
// components/Timemania/index.tsx
import React from "react";
import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";
import Menu from "../Menu"; // Importe o componente Menu
import Resultado from "../Principal/Direita/Resultado"; // Importe o componente Resultado
import Estimativa from "../Principal/Esquerda/Estimativa";
import { timemania as timemaniaTheme } from '../../styles/theme'; // Importe o tema timemania

export default function Timemania() {
  const { timemania } = useLoteria();

  // Verifique se 'timemania' e 'valorEstimadoProximoConcurso' estão definidos antes de acessá-los
  if (!timemania || !timemania.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Menu /> 
      <div className="timemania-bloco-principal">
        <div>
          <div className="timemania-bloco-loteria">
            <img src={trevo} alt="" />
            <span className="timemania-nome-loteria" style={{ color: timemaniaTheme.loteria }}>TIMEMANIA</span>
          </div>
          <Estimativa 
            dataProximoConcurso={timemania.dataProximoConcurso}
            valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso}
            estimativa={timemaniaTheme.estimativa} // Passe a cor 'estimativa' do seu tema
          />
        </div>
        <div className="timemania-bloco-direita">
          <Resultado dezenas={timemania.dezenas} />
          <div className="timemania-texto-acumulou">
            {timemania.quantidadeGanhadores === 0
              ? "ACUMULOU!"
              : `${timemania.quantidadeGanhadores} GANHADORES`}
          </div>
          <div className="timemania-data-concurso">
            {`Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`}
          </div>
        </div>
      </div>
    </>
  );
}
*/
/*
import React from "react";
import styled from "styled-components";
import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";
import Menu from "../Menu";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Acumulou from "../Principal/Direita/Acumulou"; // Importe o componente Acumulou
import { timemania as timemaniaTheme } from '../../styles/theme'; // Importe o tema timemania

const Timemania: React.FC = () => {
  const { timemania } = useLoteria();

  if (!timemania || !timemania.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="timemania-bloco-principal">
      <Menu />
      <div>
        <div className="timemania-bloco-loteria">
          <img src={trevo} alt="Trevo da Timemania" />
          
          <span className="timemania-nome-loteria" style={{ color: timemaniaTheme.loteria }}>TIMEMANIA</span>
          </div>
        <Estimativa 
          dataProximoConcurso={timemania.dataProximoConcurso}
          valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso}
          estimativa={timemaniaTheme.estimativa}
        />
      </div>
      <div className="timemania-bloco-direita">
        <LinhaSld>
          {timemania.dezenas.map((dezena: string, index: number) => (
            <DezenaSld key={index} theme={timemaniaTheme}>
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </DezenaSld>
          ))}
        </LinhaSld>
        <Acumulou quantidadeGanhadores={timemania.quantidadeGanhadores} theme={timemaniaTheme} />
        <div className="timemania-data-concurso">
          {`Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
};

export default Timemania;

const LinhaSld = styled.div`
  display: flex;
`;

const DezenaSld = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.bola};
  color: ${({ theme }) => theme.bolafonte};
  border-radius: 25px;
  padding: 10px;
  margin: 0px 10px;
`;
*/
import React from "react";
import styled from "styled-components";
import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";
import Menu from "../Menu";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Acumulou from "../Principal/Direita/Acumulou";
import Data from "../Principal/Direita/Data"; // Importamos o componente Data
import { timemania as timemaniaTheme } from "../../styles/theme"; // Importamos o tema timemania

const Timemania: React.FC = () => {
  const { timemania } = useLoteria();

  if (!timemania || !timemania.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="timemania-bloco-principal">
      <Menu />
      <div>
        <div className="timemania-bloco-loteria">
          <img src={trevo} alt="Trevo da Timemania" />
          <span className="timemania-nome-loteria" style={{ color: timemaniaTheme.loteria }}>
            TIMEMANIA
          </span>
        </div>
        <Estimativa
          dataProximoConcurso={timemania.dataProximoConcurso}
          valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso}
          estimativa={timemaniaTheme.estimativa}
        />
      </div>
      <div className="timemania-bloco-direita">
        <LinhaSld>
          {timemania.dezenas.map((dezena: string, index: number) => (
            <DezenaSld key={index} theme={timemaniaTheme}>
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </DezenaSld>
          ))}
        </LinhaSld>
        <Acumulou quantidadeGanhadores={timemania.quantidadeGanhadores} theme={timemaniaTheme} />
        <Data data={`Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`} theme={timemaniaTheme} />
      </div>
    </div>
  );
};

export default Timemania;

const LinhaSld = styled.div`
  display: flex;
`;

const DezenaSld = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.bola};
  color: ${({ theme }) => theme.bolafonte};
  border-radius: 25px;
  padding: 10px;
  margin: 0px 10px;
`;
