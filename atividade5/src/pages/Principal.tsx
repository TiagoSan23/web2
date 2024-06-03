import Megasena from "../components/Megasena";
import Quina from "../components/Quina";
import Timemania from "../components/Timemania";
import { useLoteria } from "../hooks";
import "./index.css";

export default function Principal() {
  const { megasena } = useLoteria();

  return (
    <>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Timemania/>
          <Megasena />
          <Quina />
        </div>
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </>
  );
}
