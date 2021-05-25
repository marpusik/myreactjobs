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
import  './App.scss';


function App() {


  return (
    <div className="App">
      <div className="container">
      <Router>
      <Header/>
        <Switch>
          <Route exact path='/'>
                   
                    <Main />
                    
          </Route>
          <Route exact path='/card'>
                  
                  <Card />
                
          </Route>
          <Route exact path='/catalog'>
                
                  <Catalog />
                  
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer/>
      </Router>

      </div>
    </div>
  );
}

export default App;
