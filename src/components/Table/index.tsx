import { Container } from "./styles";

export function Table() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>10/10/2024</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>10/10/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}