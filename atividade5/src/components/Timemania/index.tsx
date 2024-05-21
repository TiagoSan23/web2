import "./index.css";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Menu from "../../Menu";

export default function Timemania() {
    const { timemania } = useLoteria();

    return (
        <div>
            <Menu />
            <div className="time-bloco-principal">
                <div>
                    <div className="time-bloco-loteria">
                        <img src={trevo} alt="" />
                        <span className="time-nome-loteria">TIMEMANIA</span>
                    </div>
                    <div className="time-bloco-estimativa">
                        <div className="time-texto-estimativa">
                            Estimativa de prêmio do próximo concurso.
                            Sorteio em {timemania.dataProximoConcurso}:
                        </div>
                        <div className="time-valor-estimativa">
                            {timemania.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </div>
                    </div>
                </div>
                <div className="time-bloco-direita">
                    <div className="time-linha-bola">
                        {
                            timemania.dezenas.map(dezena =>
                                <div className="time-bola" key={dezena}>{dezena}</div>
                            )
                        }
                    </div>
                    <div className="time-texto-acumulou">
                        {
                            timemania.quantidadeGanhadores === 0 ?
                                "ACUMULOU!" :
                                `${timemania.quantidadeGanhadores} GANHADORES`
                        }
                    </div>
                    <div className="time-data-concurso">
                        {
                            `Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}