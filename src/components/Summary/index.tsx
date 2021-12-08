import { Container } from "./style";

import icnentImg from "../../assets/entradas.svg"
import icnsaiImg from "../../assets/saidas.svg"
import icntotImg from "../../assets/total.svg"

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icnentImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={icnsaiImg} alt="Saídas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div className="card-total">
                <header>
                    <p>Total</p>
                    <img src={icntotImg} alt="Total"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    );
}