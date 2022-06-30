import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBlock from '../../../lesson7/my-app/src/components/contentBlocks/mainBlock';

function App() {

  const clickButtonFunc = () => {
    console.log('beeeeeeeeeeeeebra')
  }

  const number = 4
  return (
    <div className="App">
      < Header />
      < MainBlock clickButtonFunc={clickButtonFunc} number={number} display={true} color='red' content='beeeebra'/>
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
    </div>
  );
}

export default App;
