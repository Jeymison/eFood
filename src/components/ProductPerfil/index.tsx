import pizza from '../../assets/images/pizza.svg'
import { Img } from '../HeroHome/styles'
import { Button, CardPerfil, Description, Titulo } from './styled'

type Props = {
  title: string
  description: string
  image: string
}

const ProductPerfil = ({ title, description, image }: Props) => (
  <CardPerfil>
    <img src={image} alt={title} />
    <div>
      <Titulo>{title}</Titulo>
    </div>
    <Description>{description}</Description>
    <Button>Adicionar ao carrinho</Button>
  </CardPerfil>
)

export default ProductPerfil
