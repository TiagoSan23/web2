import Carregando from "../Caregando";
import Lotofacil from "../components/Lotofacil";
import { useLoteria } from "../hooks";
import "./index.css";

export default function LotoPrincipal() {
  const { megasena } = useLoteria();

  return (
    <>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Lotofacil />
        </div>
      ) : (
        <Carregando />
      )}
    </>
  );
}
