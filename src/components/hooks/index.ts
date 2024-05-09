import { useContext } from "react";
import { RandomContext } from "../contexts/RandomContext";

export default function useRandom() {
    return useContext(RandomContext);
}