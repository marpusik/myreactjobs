import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Footer from "./pages/footer/Footer";
import Catalog from './pages/catalog/catalog';
import Card from './pages/card/Card';


import s from './App.module.scss';


function App() {


  return (
    <div className={s.App}>
      <div className={s.container}>

        <Header />
        <Main />
        <Catalog />
        <Card/>
        <Footer />

      </div>
    </div>
  );
}

export default App;
