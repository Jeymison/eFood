import { GlobalCSS } from './styles'
import Banner from './components/Banner'
import { BrowserRouter } from 'react-router-dom'
import ProductsList from './components/ProductsList'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Banner />
      <ProductsList />
    </BrowserRouter>
  )
}

export default App
