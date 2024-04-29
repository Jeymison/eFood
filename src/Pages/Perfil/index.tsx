import HeroPerfil from '../../components/HeroPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import ProductsListPerfil from '../../components/ProductsListPerfil'
import { Food } from '../Home'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const [restaurantes, setRestaurantes] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurantes(res))
    )
  }, [])

  return (
    <>
      <HeroPerfil />
      <BannerPerfil />
      <ProductsListPerfil pizzas={restaurantes} />
    </>
  )
}

export default Perfil
