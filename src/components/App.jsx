import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Navbar from "./Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailConteiner'
/* import ItemCount from './ItemCount/ItemCount'; */
/* import Dolar from './Dolar/Dolar';
 */const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoria' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
