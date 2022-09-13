import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PiePagina from './components/Footer/PiePagina';
import SwapiContainer from './components/swapi/SwapiContainer';
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import HomePage from './components/HomePage/HomePage'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  
  return (
    <>   
      <BrowserRouter>
        <NavBar/>
        {/* <ItemDetailContainer/> */}
        <Routes>            
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryid' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>
        
        <br/>
        <PiePagina/>
      </BrowserRouter>                              

    </>
    
  );
}

export default App;
