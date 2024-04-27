import { GlobalCSS } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Rotas from './routes'

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
