import HeroPerfil from '../../components/HeroPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import ProductsListPerfil from '../../components/ProductsListPerfil'
import { useEffect, useState } from 'react'
import { Food } from '../Home'

export const Perfil = () => {
  const [italiana, setItaliana] = useState<Food[]>([])
  const [arabes, setIArabes] = useState<Food[]>([])
  const [sushi, setSushi] = useState<Food[]>([])
  const [lusitano, setLusitano] = useState<Food[]>([])
  const [pizza, setPizza] = useState<Food[]>([])
  const [terra, setTerra] = useState<Food[]>([])

  useEffect(() => {
    fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes/perfil/1'
    ).then((res) => res.json().then((res) => setItaliana(res)))

    fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes/perfil/2'
    ).then((res) => res.json().then((res) => setIArabes(res)))

    fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes/perfil/3'
    ).then((res) => res.json().then((res) => setSushi(res)))

    fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes/perfil/4'
    ).then((res) => res.json().then((res) => setLusitano(res)))

    fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes/perfil/5'
    ).then((res) => res.json().then((res) => setPizza(res)))

    fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes/perfil/6'
    ).then((res) => res.json().then((res) => setTerra(res)))
  }, [])
  return (
    <>
      <HeroPerfil />
      <BannerPerfil />
      <ProductsListPerfil pizzas={italiana} />
      <ProductsListPerfil pizzas={arabes} />
      <ProductsListPerfil pizzas={sushi} />
      <ProductsListPerfil pizzas={lusitano} />
      <ProductsListPerfil pizzas={pizza} />
      <ProductsListPerfil pizzas={terra} />
    </>
  )
}

export default Perfil
