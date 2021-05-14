// import logo from './logo.svg';
import './App.css';
import Header from './pages/header/Header';


// import Main from './pages/main/Main';
import Footer from "./pages/footer/Footer";
import Catalog from './pages/catalog/catalog';

function App() {


  return (
    <div className="App">
      <div className="container">

        <Header />
        <Catalog />
          <Footer/>
      </div>
    </div>
  );
}

export default App;
