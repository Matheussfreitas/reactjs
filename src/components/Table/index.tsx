import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function Table() {
    useEffect(() => {
        api.get('/api/transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr className="title">
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="linha">
                        <td className="item">Desenvolvimento de site</td>
                        <td className="valor">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>10/10/2024</td>
                    </tr>
                    <tr>
                        <td className="item">Computador</td>
                        <td className="valor">R$ 5.400,00</td>
                        <td>Venda</td>
                        <td>10/10/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}