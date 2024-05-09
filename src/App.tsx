import { RandomProvider } from "./components/contexts/RandomContext";
import Main from "./components/pages/Main";

export default function App() {
  return (
    <RandomProvider>
      <Main />
    </RandomProvider>
  );
}

