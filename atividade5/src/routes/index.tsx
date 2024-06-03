import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from "../contexts";
import Megasena from "../components/Megasena";
import Quina from "../components/Quina";
import Timemania from "../components/Timemania";

const AppRoutes: React.FC = () => {
  return (
    <Provider>
      <Routes>
        {/* Rota inicial, exibe apenas o texto "Carregando..." */}
        <Route path="/" element={<Megasena />} />
        {/* Rota para a página de Megasena */}
        <Route path="/megasena" element={<Megasena />} />
        {/* Rota para a página de Quina */}
        <Route path="/quina" element={<Quina />} />
        {/* Rota para a página de Timemania */}
        <Route path="/timemania" element={<Timemania />} />
      </Routes>
    </Provider>
  );
}

export default AppRoutes;
