import ReactDOM from 'react-dom/client';
import App from './App';
import "@fontsource/roboto"; // Importa a fonte Roboto
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

