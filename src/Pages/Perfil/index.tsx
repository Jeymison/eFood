import HeroPerfil from '../../components/HeroPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import ProductsListPerfil from '../../components/ProductsListPerfil'
import { Food } from '../Home'

const pizzaList: Food[] = []

const Perfil = () => (
  <>
    <HeroPerfil />
    <BannerPerfil />
    <ProductsListPerfil pizzas={pizzaList} />
  </>
)

export default Perfil
