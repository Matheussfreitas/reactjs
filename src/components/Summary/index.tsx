import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";
import entradas from '/Users/Bolt/reactjs/src/assets/Entradas.svg'
import saidas from '/Users/Bolt/reactjs/src/assets/Saídas.svg'
import total from '/Users/Bolt/reactjs/src/assets/Total.svg'

export function Summary() {
    const {transactions} = useContext(TransactionsContext);
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="" />
                </header>
                <strong>- R$500</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="" />
                </header>
                <strong>R$500</strong>
            </div>
        </Container>
    )
}