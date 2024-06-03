import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'; 

interface CarregandoProps {}

const Carregando: React.FC<CarregandoProps> = () => {
  const [showCarregando, setShowCarregando] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Location:", location.pathname);
    if (location.pathname === "/") {
      setShowCarregando(true);
    } else {
      setShowCarregando(false);
    }
    console.log("showCarregando:", showCarregando);
  }, [location, showCarregando]); // Adicionando showCarregando às dependências do useEffect

  const carregandoStyles: React.CSSProperties = {
    position: 'absolute', 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#000',
  };

  return (
    <div style={carregandoStyles}>
      {showCarregando && (
        <div>
          <p>Carregando...</p>
        </div>
      )}
    </div>
  );
};

export default Carregando;
