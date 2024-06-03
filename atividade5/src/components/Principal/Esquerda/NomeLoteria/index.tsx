// components/NomeLoteria/index.tsx
import React from "react";

interface NomeLoteriaProps {
  loteria: string; // Adicione a propriedade 'loteria'
}

const NomeLoteria: React.FC<NomeLoteriaProps> = ({ loteria }) => {
  return <span className="mega-nome-loteria" style={{ color: loteria }}>MEGA-SENA</span>; // Use a propriedade 'loteria' para definir a cor do texto
};

export default NomeLoteria;
