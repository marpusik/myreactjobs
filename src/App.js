// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import MenuLink from './components/menuLink/MenuLink';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <div className="container">


        <div className="d">
          <Menu/>
          <MenuLink text="djn"/>
          <Products/>

        </div>





      </div>
    </div>
  );
}

export default App;
