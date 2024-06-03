// components/Quina/index.tsx
/*
import React from "react";
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";
import Menu from "../Menu"; // Importe o componente Menu
import Resultado from "../Principal/Direita/Resultado"; // Importe o componente Resultado
import Estimativa from "../Principal/Esquerda/Estimativa";
import { quina as quinaTheme } from "../../styles/theme"; // Importe o tema quina

export default function Quina() {
  const { quina } = useLoteria();

  // Verifique se 'quina' e 'valorEstimadoProximoConcurso' estão definidos antes de acessá-los
  if (!quina || !quina.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Menu />
      <div className="quina-bloco-principal">
        <div>
          <div className="quina-bloco-loteria">
            <img src={trevo} alt="" />
            <span
              className="quina-nome-loteria"
              style={{ color: quinaTheme.loteria }}
            >
              QUINA
            </span>{" "}
           
          </div>
          <Estimativa
            dataProximoConcurso={quina.dataProximoConcurso}
            valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso}
            estimativa={quinaTheme.estimativa} // Passe a cor 'estimativa' do seu tema
          />
        </div>
        <div className="quina-bloco-direita">
          <Resultado
            dezenas={quina.dezenas}
          />
          <div className="quina-texto-acumulou">
            {quina.quantidadeGanhadores === 0
              ? "ACUMULOU!"
              : `${quina.quantidadeGanhadores} GANHADORES`}
          </div>
          <div className="quina-data-concurso">
            {`Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`}
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
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu";
import { quina as quinaTheme } from "../../styles/theme"; // Importe o tema quina

const Componente: React.FC = () => {
  const { quina } = useLoteria();

  if (!quina || !quina.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="quina-bloco-principal">
      <Menu />
      <div>
        <div className="quina-bloco-loteria">
          <img src={trevo} alt="Trevo da Quina" />
          
         
          <span
            className="quina-nome-loteria"
            style={{ color: quinaTheme.loteria }}
          >
            QUINA
          </span>{" "}
        </div>
        
        <Estimativa 
          dataProximoConcurso={quina.dataProximoConcurso}
          valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso}
          estimativa={quinaTheme.estimativa}
        />
      </div>
      <div className="quina-bloco-direita">
        <LinhaSld>
          {quina.dezenas.map((dezena: string, index: number) => (
            <DezenaSld key={index} theme={quinaTheme}>
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </DezenaSld>
          ))}
        </LinhaSld>
        <div className="quina-texto-acumulou">
          {quina.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${quina.quantidadeGanhadores} GANHADORES`}
        </div>
        <div className="quina-data-concurso">
          {`Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
};

export default Componente;

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
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";
import Menu from "../Menu";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Acumulou from "../Principal/Direita/Acumulou"; // Importe o componente Acumulou
import Data from "../Principal/Direita/Data"; // Importe o componente Data
import { quina as quinaTheme } from "../../styles/theme"; // Importe o tema quina

const Quina: React.FC = () => {
  const { quina } = useLoteria();

  if (!quina || !quina.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="quina-bloco-principal">
      <Menu />
      <div>
        <div className="quina-bloco-loteria">
          <img src={trevo} alt="Trevo da Quina" />
          {/* Passando o tema específico da Quina para NomeLoteria */}
          <span className="quina-nome-loteria" style={{ color: quinaTheme.loteria }}>
            QUINA
          </span>{" "}
        </div>
        {/* Passando o tema específico da Quina para Estimativa */}
        <Estimativa
          dataProximoConcurso={quina.dataProximoConcurso}
          valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso}
          estimativa={quinaTheme.estimativa}
        />
      </div>
      <div className="quina-bloco-direita">
        <LinhaSld>
          {quina.dezenas.map((dezena: string, index: number) => (
            <DezenaSld key={index} theme={quinaTheme}>
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </DezenaSld>
          ))}
        </LinhaSld>
        {/* Passando o tema para o componente Acumulou */}
        <Acumulou quantidadeGanhadores={quina.quantidadeGanhadores} theme={quinaTheme} />
        {/* Passando o tema para o componente Data */}
        <Data data={`Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`} theme={quinaTheme} />
      </div>
    </div>
  );
};

export default Quina;

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
