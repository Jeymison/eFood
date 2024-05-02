import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeroPerfil from '../../components/HeroPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import ProductsListPerfil from '../../components/ProductsListPerfil'
import { Restaurants } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurant(res))
    )
  }, [id])

  if (!restaurant) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <HeroPerfil />
      <BannerPerfil restaurant={restaurant} />
      <ProductsListPerfil cardapios={restaurant} />
    </>
  )
}

export default Perfil
