import { useParams } from 'react-router-dom'
import HeroPerfil from '../../components/HeroPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import ProductsListPerfil from '../../components/CardapioListPerfil'
import { useGetCardapioRestaurantsQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: cardapioRestaurants } = useGetCardapioRestaurantsQuery(id!)

  if (cardapioRestaurants) {
    return (
      <>
        <HeroPerfil />
        <BannerPerfil restaurant={cardapioRestaurants} />
        <ProductsListPerfil cardapios={cardapioRestaurants} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Perfil
