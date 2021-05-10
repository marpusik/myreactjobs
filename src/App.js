// import logo from './logo.svg';
import './App.css';
import Basket from './components/basket/Basket';
import Heart from './components/heart/Heart';
import Menu from './components/menu/Menu';
import Products from './components/products/Products';

import CardMenu from './pages/card/cardMenu/CardMenu';
import Main from './pages/main/Main';

function App() {



  return (
    <div className="App">
      <div className="container">
        <Basket/>
        <Heart/>
        <Products/>
        <CardMenu/>
          <Menu />


          <Main/>







      </div>
    </div>
  );
}

export default App;
