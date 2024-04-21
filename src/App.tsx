import { GlobalCSS } from './styles'
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter
} from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Footer from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
