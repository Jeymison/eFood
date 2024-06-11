import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Checkout from './Pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio/:id" element={<Perfil />} />
    <Route path="/checkout" element={<Checkout priceTotal={0} />} />
  </Routes>
)

export default Rotas
