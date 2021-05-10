// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import Products from './components/products/Products';

import Main from './pages/main/Main';

function App() {



  return (
    <div className="App">
      <div className="container">
          <Menu />

          <Products/>


          <Main/>







      </div>
    </div>
  );
}

export default App;
