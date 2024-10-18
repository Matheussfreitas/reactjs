import { useContext } from "react";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";


export function Table() {
    const {transactions} = useContext(TransactionsContext);
    
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
                    {transactions.map(transaction => (
                        <tr key={transaction.id} className="linha">
                            <td className="item">{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                }).format(transaction.amount)}
                                </td>
                            <td>{transaction.category}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                            )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}