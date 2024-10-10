import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src="" alt="" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src="" alt="" />
                </header>
                <strong>- R$500</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src="" alt="" />
                </header>
                <strong>R$500</strong>
            </div>
        </Container>
    )
}