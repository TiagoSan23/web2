import "./index.css";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Menu from "../../Menu";

export default function Megasena() {
    const { megasena } = useLoteria();
    return (
        <div>
            <Menu />
            <div className="mega-bloco-principal">
                <div>
                    <div className="mega-bloco-loteria">
                        <img src={trevo} alt="" />
                        <span className="mega-nome-loteria">MEGA-SENA</span>
                    </div>
                    <div className="mega-bloco-estimativa">
                        <div className="mega-texto-estimativa">
                            Estimativa de prêmio do próximo concurso.
                            Sorteio em {megasena.dataProximoConcurso}:
                        </div>
                        <div className="mega-valor-estimativa">
                            {megasena.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </div>
                    </div>
                </div>
                <div className="mega-bloco-direita">
                    <div className="mega-linha-bola">
                        {
                            megasena.dezenas.map(dezena =>
                                <div className="mega-bola" key={dezena}>{dezena}</div>
                            )
                        }
                    </div>
                    <div className="mega-texto-acumulou">
                        {
                            megasena.quantidadeGanhadores === 0 ?
                                "ACUMULOU!" :
                                `${megasena.quantidadeGanhadores} GANHADORES`
                        }
                    </div>
                    <div className="mega-data-concurso">
                        {
                            `Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}