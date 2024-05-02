import Hero from '../../components/HeroHome'
import ProductsListHome from '../../components/RestaurantsListHome'
import { useEffect, useState } from 'react'

//Criando os tipos conforme API

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [foodlist, setFoodList] = useState<Restaurants[]>([])

  //chamando a API Home
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setFoodList(res))
    )
  }, [])

  return (
    <>
      <Hero />
      <ProductsListHome foods={foodlist} />
    </>
  )
}

export default Home
