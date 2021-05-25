import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './layouts/header/Header';
import Main from './pages/main/Main';
import Footer from "./layouts/footer/Footer";
import Catalog from './pages/catalog/catalog';
import Card from './pages/card/Card';
import NoMatch from './layouts/404page/noMatch';
import "./sass/fonts.scss";
import './App.scss';


function App() {


  return (
    <div className="App">


      <Router>

        <div className="container">
          <Header />
        </div>

        <Switch>
          <Route exact path='/'>

            <div className="container">
              <Main />
            </div>

          </Route>
          <Route exact path='/card'>

            <div className="container">
              <Card />
            </div>

          </Route>

          <Route exact path='/catalog'>

            <div className="container">
              <Catalog />
            </div>

          </Route>


          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
