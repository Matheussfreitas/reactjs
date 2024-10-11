import { Container, Content } from './styles'
import logo from '/Users/Bolt/reactjs/src/assets/Logo.svg'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="" />
                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}