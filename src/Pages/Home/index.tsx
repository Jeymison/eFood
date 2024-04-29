import Hero from '../../components/HeroHome'
import ProductsListHome from '../../components/ProductsListHome'
import { useEffect, useState } from 'react'

// const foodList: Food[] = [
//   {
//     id: 1,
//     titulo: 'Hioki Sushi ',
//     avaliacao: 4.9,
//     descricao:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida, Experimente o Japão sem sair do lar com nosso delivery!',
//     infos: [true, 'Japa'],
//     capa:
//   }
// ]
//Criando os tipos conforme API

export type Food = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [foodlist, setFoodList] = useState<Food[]>([])

  //chamando a API
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
