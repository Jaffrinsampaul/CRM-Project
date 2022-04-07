import logo from './logo.svg';
import './App.css';
import N_bar from './components/navbar';
import Product from './components/product';
// import S_bar from './components/sidebar';


function App() {
  return (
    <div>
      {/* <header className="App-header">
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
      </header> */}


      <N_bar />
      {/* <Product/> */}
      {/* <S_bar /> */}
      
    </div>
  );
}

export default App;
