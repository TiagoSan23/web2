import Carregando from "../Caregando";
import Megasena from "../components/Megasena";
import { useLoteria } from "../hooks";
import "./index.css";

export default function MegaPrincipal() {
  const { megasena } = useLoteria();

  return (
    <>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Megasena />
        </div>
      ) : (
        <Carregando />
      )}
    </>
  );
}
