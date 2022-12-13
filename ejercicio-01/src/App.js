import logo from './logo.svg';
import './App.css';
import ListContact from './components/listContact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListContact></ListContact>
      </header>
    </div>
  );
}

export default App;
