import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route exact path='/'>
                    <Header/>
                    <Main />
                    <Footer/>
          </Route>
          <Route exact path='/card'>
                  <Header/>
                  <Card />
                  <Footer/>
          </Route>
          <Route exact path='/catalog'>
                  <Header/>
                  <Catalog />
                  <Footer/>
          </Route>
        </Switch>
      </Router>
        

      </div>
    </div>
  );
}

export default App;
