import { ItemListContainer } from './components/containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import CartContainer from './components/containers/CartContainer/CartContainer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer saludo=" Bienvienidos a Planeta Triatlón" />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<Navigate to='/' />} />

        </Routes>


      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
