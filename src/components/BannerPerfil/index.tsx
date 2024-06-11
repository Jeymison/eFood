import { Imagem, Titulo, TituloHead } from './styles'

export type Props = {
  restaurant: Restaurant
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
