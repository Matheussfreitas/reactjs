import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles';
import fechar from '/Users/Bolt/reactjs/src/assets/fechar.svg'
import entradas from '/Users/Bolt/reactjs/src/assets/Entradas.svg'
import saidas from '/Users/Bolt/reactjs/src/assets/Saídas.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className='react-modal-content'
        >
            <button type='button' 
            onClick={onRequestClose} 
            className='react-modal-close'
            >
                <img src={fechar} alt="" />
            </button>

            <Container> 
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder='Título'/>

                <input type="number" placeholder='Valor'/>

                <TransactionTypeContainer> 
                    <button
                    type='button'
                    >
                        <img src={entradas} alt="" />
                        <span>Entrada</span>
                    </button>

                    <button
                    type='button'
                    >
                        <img src={saidas} alt="" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input type="text" placeholder='Categoria'/>

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}