import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CustomGreeting from './components/CustomGreeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Hello World!</p>
      <Greeting></Greeting>
      <CustomGreeting name="Harsha"></CustomGreeting>
    </div>
  );
}

export default App;
