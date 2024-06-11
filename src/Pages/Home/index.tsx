import Hero from '../../components/HeroHome'
import ProductsListHome from '../../components/RestaurantsListHome'
import { useGetFeatureRestaurantsQuery } from '../../services/api'

//Criando os tipos conforme API

const Home = () => {
  const { data: Restaurants } = useGetFeatureRestaurantsQuery()

  if (Restaurants) {
    return (
      <>
        <Hero />
        <ProductsListHome foods={Restaurants} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
