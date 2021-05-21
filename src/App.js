import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Footer from "./components/footer/Footer";
import Catalog from './pages/catalog/catalog';

import s from './App.module.scss';
import {CardItem} from "./pages/card/carditem/CardItem";


function App() {


  return (
    <div className={s.App}>
      <div className={s.container}>

        <Header />
        {/*<Main />*/}
        {/*<Catalog />*/}
          <CardItem/>
        <Footer />

      </div>
    </div>
  );
}

export default App;
