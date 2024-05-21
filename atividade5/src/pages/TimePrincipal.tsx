import Carregando from "../Caregando";
import Timemania from "../components/Timemania";
import { useLoteria } from "../hooks";
import "./index.css";

export default function TimePrincipal() {
  const { timemania } = useLoteria();

  return (
    <>
      {timemania.dataApuracao ? (
        <div className="principal-bloco">
          <Timemania />
        </div>
      ) : (
        <Carregando />
      )}
    </>
  );
}
