import { ItemListContainer } from './components/containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer/ItemDetailContainer';
import {CartContainer} from './components/containers/CartContainer/CartContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

      <Route path='/' element={<ItemListContainer saludo= " Bienvienidos a Planeta Triatlón" />}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/detail/:detailId' element={ <ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer />}/>
      <Route path='*' element={<Navigate to='/'/>}/>

      </Routes>
      

    </BrowserRouter>
  )
}

export default App;
