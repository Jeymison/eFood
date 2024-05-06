import Hero from '../../components/HeroHome'
import ProductsListHome from '../../components/RestaurantsListHome'
import { useEffect, useState } from 'react'
import { useGetFeatureRestaurantsQuery } from '../../services/api'

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
  const { data: featureRestaurants } = useGetFeatureRestaurantsQuery()

  if (featureRestaurants) {
    return (
      <>
        <Hero />
        <ProductsListHome foods={featureRestaurants} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
