import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

// Omite as informações selecionadas de Transaction
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// ReactNode permite receber qualquer item JS/TS nas props
interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>,
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider( { children } : TransactionProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput : TransactionInput) {
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
        const { transaction } = response.data

        setTransaction([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}
