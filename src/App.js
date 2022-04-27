import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/actions'

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { DepositMoney, WithdrawMoney } = bindActionCreators(actionCreators, dispatch);
  //console.log(AC)
  return (
    <div className="App">
      <h1>Account Balance</h1>
      <h1>{account}</h1>
      <button onClick={() => DepositMoney(10)}>Deposit (10)</button>
      <button onClick={() => WithdrawMoney(5)}>Withdraw (5)</button>
    </div>
  );
}

export default App;
