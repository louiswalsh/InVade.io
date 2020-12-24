import logo from './ivglogo.png';
import './App.css';
import DataTable from './components/mytable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DataTable />
      </header>
    </div>
  );
}

export default App;
