import { GlobalStyled } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [IsNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleNewTransactionOpen() {
        setIsNewTransactionModalOpen(true);
    }

    function handleNewTransactionClose() {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleNewTransactionOpen}/>

      <Dashboard />

      <GlobalStyled />

      <NewTransactionModal 
      isOpen={IsNewTransactionModalOpen}
      onRequestClose={handleNewTransactionClose}
      />
    </>
  );
}

