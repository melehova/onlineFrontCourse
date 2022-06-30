import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBlock from '../../../lesson7/my-app/src/components/contentBlocks/mainBlock';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  const clickButtonFunc = () => {
    console.log('beeeeeeeeeeeeebra')
  }

  const number = 4
  return (
    <div className="App">
      < Header />
      < MainBlock clickButtonFunc={clickButtonFunc} number={number} display={true} color='red' content='beeeebra' />


      <BrowserRouter>
        <Routes>
          <Route path="/hello" component={(
            < MainBlock clickButtonFunc={clickButtonFunc} number={number} display={true} color='red' content='beeeebra' />
          )} />
          <Route path="/hllo-world" component={(
            < MainBlock clickButtonFunc={clickButtonFunc} number={number} display={true} color='red' content='Helloworld' />
          )} />
        </Routes>

      </BrowserRouter>
    </div >
  );
}

export default App;
