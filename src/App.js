// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import MenuLink from './components/menuLink/MenuLink';
import Products from './components/products/Products';
import Main from './pages/main/Main';

function App() {
  return (
    <div className="App">
      <div className="container">


        <div className="d">
          <Menu/>
          <MenuLink text="djn"/>
          <Products/>

          <Main/>

        </div>





      </div>
    </div>
  );
}

export default App;
