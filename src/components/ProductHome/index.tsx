import { Link } from 'react-router-dom'
import Button from '../Button'
import star from '../../assets/images/star_favorite.svg'
import { Card, Descricao, Infos, Titulo, Titulo2 } from './style'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  infos: string[]
  nota: string
  image: string
}

const Product = ({ title, description, infos, image, nota }: Props) => (
  <Card>
    <img src={image} alt={title} />
    {/* //Div abaixo e das infos do card que ficam em cima */}
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
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