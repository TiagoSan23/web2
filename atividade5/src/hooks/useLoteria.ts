import { useContext } from "react";
import { Contexto } from "../contexts";

export default function useLoteria(){
    return useContext(Contexto);
}