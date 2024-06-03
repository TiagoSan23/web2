// No arquivo App.tsx
/*
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'; // Importe o ThemeProvider
import { mega } from './styles/theme'; // Importe as definições de tema
import AppRoutes from './routes'; // Importe o componente AppRoutes

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mega}> 
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

*/

// No arquivo App.tsx
// No arquivo App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mega, quina, timemania } from './styles/theme';
import AppRoutes from './routes';

type ThemeName = 'mega' | 'quina' | 'timemania';

const themes: Record<ThemeName, typeof mega> = {
  mega,
  quina,
  timemania
};

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('mega');

  const handleThemeChange = (theme: ThemeName) => {
    if (themes[theme]) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Router>
        <div>
          <select onChange={(e) => handleThemeChange(e.target.value as ThemeName)} value={currentTheme}>
            <option value="mega">Mega</option>
            <option value="quina">Quina</option>
            <option value="timemania">Timemania</option>
          </select>
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

