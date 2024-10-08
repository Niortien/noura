import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Sinistres from './Pages/Sinistres';
import Contact from './Pages/Contact';
import Contactf from './Pages/Contactf';

function App() {
  
  return (
    <div className="App">
      
      <Routes>
    <Route path='/'  element={ <Home/> }/>
    <Route path='/sinistre'  element={ <Sinistres/> }/>
    <Route path='/login'  element={ <Contact/> }/>
    
    <Route path='/contact'  element={ <Contactf/> }/>

      </Routes>

    </div>
  );
}

export default App;
