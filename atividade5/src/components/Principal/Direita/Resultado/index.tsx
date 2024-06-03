/*
import React from "react";
import styled from "styled-components";

interface ResultadoProps {
  dezenas: string[];
  theme: any; // Adicionar prop theme
}

const Resultado: React.FC<ResultadoProps> = ({ dezenas, theme }) => {
  return (
    <LinhaSld>
      {dezenas.map((dezena: string, index: number) => (
        <DezenaSld key={index} theme={theme}>
          {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
        </DezenaSld>
      ))}
    </LinhaSld>
  );
};

export default Resultado;

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

interface ResultadoProps {
  dezenas: string[];
  theme?: any; // Adicione a propriedade theme como opcional
}

const Resultado: React.FC<ResultadoProps> = ({ dezenas, theme }) => {
  return (
    <LinhaSld>
      {dezenas.map((dezena: string, index: number) => (
        <DezenaSld key={index} theme={theme}>
          {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
        </DezenaSld>
      ))}
    </LinhaSld>
  );
};

export default Resultado;

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
