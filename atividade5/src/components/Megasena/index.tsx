// components/Megasena/index.tsx
/*
import React from "react";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import NomeLoteria from "../Principal/Esquerda/NomeLoteria";
import Resultado from "../Principal/Direita/Resultado"; // Importe o componente Resultado
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu"; // Importe o componente Menu aqui

// Importe o tema aqui
import { mega } from '../../styles/theme';

const Megasena: React.FC = () => {
  const { megasena } = useLoteria();

  

  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="mega-bloco-principal">
      <Menu /> 
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="" />
          <NomeLoteria loteria={mega.loteria} /> {/* Passe a cor 'loteria' do seu tem
        </div>
        <Estimativa 
          dataProximoConcurso={megasena.dataProximoConcurso}
          valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
          estimativa={mega.estimativa} // Passe a cor 'estimativa' do seu tema
        />
      </div>
      <div className="mega-bloco-direita">
      <Resultado
            dezenas={megasena.dezenas}
          />
          <div className="mega-texto-acumulou">
            {megasena.quantidadeGanhadores === 0
              ? "ACUMULOU!"
              : `${megasena.quantidadeGanhadores} GANHADORES`}
          </div>
          <div className="mega-data-concurso">
            {`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}
          </div>
       
      </div>
    </div>
  );
};

export default Megasena;
*/
/*
// components/Megasena/index.tsx
import React from "react";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import NomeLoteria from "../Principal/Esquerda/NomeLoteria";
import Resultado from "../Principal/Direita/Resultado";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu";
import { useTheme } from 'styled-components';

const Megasena: React.FC = () => {
  const { megasena } = useLoteria();
  const theme = useTheme(); // Utilizando o tema

  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="mega-bloco-principal">
      <Menu />
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="Trevo da Megasena" />
          <NomeLoteria loteria={theme.loteria} />
        </div>
        <Estimativa 
          dataProximoConcurso={megasena.dataProximoConcurso}
          valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
          estimativa={theme.estimativa} 
        />
      </div>
      <div className="mega-bloco-direita">
        <Resultado dezenas={megasena.dezenas} /> 
        <div className="mega-texto-acumulou">
          {megasena.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${megasena.quantidadeGanhadores} GANHADORES`}
        </div>
        <div className="mega-data-concurso">
          {`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
};

export default Megasena;

*/
/*
// components/Megasena/index.tsx
import React from "react";
import styled, { useTheme } from "styled-components";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import NomeLoteria from "../Principal/Esquerda/NomeLoteria";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu";

const Megasena: React.FC = () => {
  const { megasena } = useLoteria();
  const theme = useTheme(); // Utilizando o tema

  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="mega-bloco-principal">
      <Menu />
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="Trevo da Megasena" />
          <NomeLoteria loteria={theme.loteria} />
        </div>
        <Estimativa 
          dataProximoConcurso={megasena.dataProximoConcurso}
          valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
          estimativa={theme.estimativa} // Usando cor do tema
        />
      </div>
      <div className="mega-bloco-direita">
        <LinhaSld>
          {megasena.dezenas.map((dezena: string, index: number) => (
            <DezenaSld key={index} theme={theme}>
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </DezenaSld>
          ))}
        </LinhaSld>
        <div className="mega-texto-acumulou">
          {megasena.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${megasena.quantidadeGanhadores} GANHADORES`}
        </div>
        <div className="mega-data-concurso">
          {`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
};

export default Megasena;

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
/*
import React from "react";
import styled, { useTheme } from "styled-components"; // Importe useTheme para acessar o tema
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import NomeLoteria from "../Principal/Esquerda/NomeLoteria";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu";

const Megasena: React.FC = () => {
  const { megasena } = useLoteria();
  const theme = useTheme(); // Use useTheme para acessar o tema

  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="mega-bloco-principal">
      <Menu />
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="Trevo da Megasena" />
          
          <NomeLoteria loteria={theme.loteria} />
        </div>
        
        <Estimativa 
          dataProximoConcurso={megasena.dataProximoConcurso}
          valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
          estimativa={theme.estimativa}
        />
      </div>
      <div className="mega-bloco-direita">
        <LinhaSld>
          {megasena.dezenas.map((dezena: string, index: number) => (
            <DezenaSld key={index} theme={theme}>
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </DezenaSld>
          ))}
        </LinhaSld>
        <div className="mega-texto-acumulou">
          {megasena.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${megasena.quantidadeGanhadores} GANHADORES`}
        </div>
        <div className="mega-data-concurso">
          {`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
};

export default Megasena;

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
import styled, { useTheme } from "styled-components"; // Importe useTheme para acessar o tema
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import NomeLoteria from "../Principal/Esquerda/NomeLoteria";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu";
import Acumulou from "../Principal/Direita/Acumulou"; // Importe o componente Acumulou
import Data from "../Principal/Direita/Data"; // Importe o componente Data

const Megasena: React.FC = () => {
  const { megasena } = useLoteria();
  const theme = useTheme(); // Use useTheme para acessar o tema

  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="mega-bloco-principal">
      <Menu />
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="Trevo da Megasena" />
          {/* Passando o tema específico da Mega Sena para NomeLoteria */}
          <NomeLoteria loteria={theme.loteria} />
        </div>
        {/* Passando o tema específico da Mega Sena para Estimativa */}
        <Estimativa 
          dataProximoConcurso={megasena.dataProximoConcurso}
          valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
          estimativa={theme.estimativa}
        />
      </div>
      <div className="mega-bloco-direita">
        <LinhaSld>
          {megasena.dezenas.map((dezena: string, index: number) => (
            <DezenaSld key={index} theme={theme}>
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </DezenaSld>
          ))}
        </LinhaSld>
        {/* Passando o tema para o componente Acumulou */}
        <Acumulou quantidadeGanhadores={megasena.quantidadeGanhadores} theme={theme} />
        {/* Passando o tema para o componente Data */}
        <Data data={`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`} theme={theme} />
      </div>
    </div>
  );
};

export default Megasena;

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

