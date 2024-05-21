import "./index.css";
import trevo from "../../assets/trevo-lotofacil.png";
import { useLoteria } from "../../hooks";
import Megasena from "../Megasena";
import Menu from "../../Menu";

export default function Lotofacil() {
    const { lotofacil } = useLoteria();
    const linha1: string[] = [], linha2: string[] = [], linha3: string[] = [];
    for (let i = 0; i < 5; i++) {
        linha1.push(lotofacil.dezenas[i]);
    }
    for (let i = 5; i < 10; i++) {
        linha2.push(lotofacil.dezenas[i]);
    }
    for (let i = 10; i < 15; i++) {
        linha3.push(lotofacil.dezenas[i]);
    }

    return (
        <div>
            <Menu />
            <div className="lotofacil-bloco-principal">
                <div>
                    <div className="lotofacil-bloco-loteria">
                        <img src={trevo} alt="" />
                        <span className="lotofacil-nome-loteria">LOTOFÁCIL</span>
                    </div>
                    <div className="lotofacil-bloco-estimativa">
                        <div className="lotofacil-texto-estimativa">
                            Estimativa de prêmio do próximo concurso.
                            Sorteio em {lotofacil.dataProximoConcurso}:
                        </div>
                        <div className="lotofacil-valor-estimativa">
                            {lotofacil.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </div>
                    </div>
                </div>
                <div className="lotofacil-bloco-direita">
                    <div className="lotofacil-linha-bola">
                        {
                            linha1.map(dezena =>
                                <div className="lotofacil-bola" key={dezena}>{dezena}</div>
                            )
                        }
                    </div>
                    <div className="lotofacil-linha-bola">
                        {
                            linha2.map(dezena =>
                                <div className="lotofacil-bola" key={dezena}>{dezena}</div>
                            )
                        }
                    </div>
                    <div className="lotofacil-linha-bola">
                        {
                            linha3.map(dezena =>
                                <div className="lotofacil-bola" key={dezena}>{dezena}</div>
                            )
                        }
                    </div>
                    <div className="lotofacil-texto-acumulou">
                        {
                            lotofacil.quantidadeGanhadores === 0 ?
                                "ACUMULOU!" :
                                `${lotofacil.quantidadeGanhadores} GANHADORES`
                        }
                    </div>
                    <div className="lotofacil-data-concurso">
                        {
                            `Concurso ${lotofacil.numeroDoConcurso} - ${lotofacil.dataPorExtenso}`
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}