import { Imagem } from './styles'
import bannerPerfil from '../../assets/images/bannerCamaraoMacarrao.svg'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Food } from '../../Pages/Home'

const BannerPerfil = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Food>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurant(res))
    )
  }, [id])

  return (
    <Imagem style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <div className="container">
        <h3>{restaurant?.tipo}</h3>
        <h1>{restaurant?.titulo}</h1>
      </div>
    </Imagem>
  )
}

export default BannerPerfil
