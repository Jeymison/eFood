import Button from '../Button'
import star from '../../assets/images/star_favorite.svg'
import { Card, Descricao, Infos, Titulo, Titulo2 } from './style'
import Tag from '../Tag'

type InfoItem = {
  destacado: boolean
  tipo: string
}

type Props = {
  title: string
  description: string
  infos: InfoItem[]
  nota: number
  image: string
}

const Product = ({ title, description, infos, image, nota }: Props) => (
  <Card>
    <img src={image} alt={title} />
    {/* //Div abaixo e das infos do card que ficam em cima */}
    <Infos>
      {infos.map((info, index) => (
        <Tag key={index}>{`${info.tipo}: ${
          info.destacado ? 'Destacado' : 'Normal'
        }`}</Tag>
      ))}
    </Infos>
    <div className="containerTop">
      <Titulo>{title}</Titulo>
      <Titulo2>
        <h3>{nota}</h3>
        <img src={star} alt="estrela amarela" />
      </Titulo2>
    </div>
    <Descricao>{description}</Descricao>
    <Button type="link" to="/perfil" title={'Saiba mais'}>
      Saiba mais
    </Button>
  </Card>
)

export default Product
