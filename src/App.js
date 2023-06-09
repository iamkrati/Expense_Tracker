import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';
import Count  from './context/Count';

function App() {
  return (
    <div className='main'>
      <GlobalProvider >
      <Header/>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      </GlobalProvider>
     </div>
  );
}

export default App;
