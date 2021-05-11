// import logo from './logo.svg';
import './App.css';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Menu from './components/menu/Menu';

import Main from './pages/main/Main';

function App() {



  return (
    <div className="App">
      <div className="container">
        <Menu />
        <Breadcrumb />
        

        <Main />







      </div>
    </div>
  );
}

export default App;
