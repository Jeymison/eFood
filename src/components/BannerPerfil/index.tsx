import { Imagem, Titulo, TituloHead } from './styles'
import { Restaurants } from '../../Pages/Home'

export type Props = {
  restaurant: Restaurants
}
const BannerPerfil = ({ restaurant }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <TituloHead>{restaurant.tipo}</TituloHead>
        <Titulo>{restaurant.titulo}</Titulo>
      </div>
    </Imagem>
  )
}

export default BannerPerfil
