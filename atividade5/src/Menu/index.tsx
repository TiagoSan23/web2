import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
    return (
        <>
            <Flex>
                <Styledtime to="/timemania">Timemania</Styledtime>
                <Styledmega to="/megasena">Megasena</Styledmega>
                <Styledloto to="/lotofacil">Quina</Styledloto>
            </Flex>
        </>
    )
}

const Flex = styled.div`
display: flex;
gap: 10px;
font-family: roboto;
`


const Styledtime = styled(Link)`
   text-decoration: none;
    color:#00ff48;
`;
const Styledmega = styled(Link)`
   text-decoration: none;
    color:#209869;
`;
const Styledloto = styled(Link)`
   text-decoration: none;
    color:#260085;
`;