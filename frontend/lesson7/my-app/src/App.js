import logo from './logo.svg';
import './App.css';
import courseObject from './data/course';
import Header from './components/Header';


function App() {

  const { courseName, courseTeacher } = courseObject
  console.log('4' + 2)

  return (
    <div className="App">
      < Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {courseName} teacher {courseTeacher}
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
