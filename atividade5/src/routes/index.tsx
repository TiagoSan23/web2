import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "../contexts";
import LotoPrincipal from "../pages/LotoPrincipal";
import TimePrincipal from "../pages/TimePrincipal";
import MegaPrincipal from "../pages/MegaPrincipal";
import Menu from "../Menu";

export default function Rotas() {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/megasena" element={<MegaPrincipal />} />
                    <Route path="/lotofacil" element={<LotoPrincipal />} />
                    <Route path="/timemania" element={<TimePrincipal />} />
                    <Route path="/menu" element={<Menu />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}