import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_KEY_MSG1);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'white' }}>{process.env.REACT_APP_KEY_MSG1}</h1>
        <h2 style={{ color: 'white' }}>{process.env.REACT_APP_KEY_MSG2}</h2>
        <h3 style={{ color: 'white' }}>{process.env.REACT_APP_KEY_MSG3}</h3>
        <h4 style={{ color: 'white' }}>{process.env.REACT_APP_KEY_MSG4}</h4>
        <h5 style={{ color: 'white' }}>{process.env.REACT_APP_KEY_MSG5}</h5>
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
    </div>
  );
}

export default App;
