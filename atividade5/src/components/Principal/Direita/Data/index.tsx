/*

import React from "react";
import styled from "styled-components"; // Importe useTheme para acessar o tema

interface DataProps {
  data: string;
}

const DataText = styled.div`
  color: ${({theme}) => theme.data};
`;

const Data: React.FC<DataProps> = ({ data }) => {
  return <DataText>{data}</DataText>;
};

export default Data;
*/

import React from "react";
import styled from "styled-components"; // Importe useTheme para acessar o tema

interface DataProps {
  data: string;
  theme: any; // Adicione a propriedade theme ao tipo de props
}

const DataText = styled.div`
  color: ${({ theme }) => theme.data}; /* Use a cor de data do tema */
`;

const Data: React.FC<DataProps> = ({ data, theme }) => {
  return <DataText theme={theme}>{data}</DataText>; // Passe o tema para o componente estilizado
};

export default Data;
