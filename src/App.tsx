import './App.css';
import { Provider } from 'react-redux';
import { store } from './store'
import Header from './components/pages/Header';
import History from './components/expense/History';
import AddTransaction from './components/expense/AddTransaction';
import Calculation from './components/expense/Calculation';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Calculation />
            <AddTransaction />
          </div>
          <div className="col-md-6">
            <History />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
