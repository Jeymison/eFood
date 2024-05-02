import Button from '../Button'
import star from '../../assets/images/star_favorite.svg'
import { Card, Descricao, IMG, Infos, Titulo, Titulo2 } from './style'
import Tag from '../Tag'
import { InfoItem } from '../RestaurantsListHome'

type Props = {
  title: string
  description: string
  infos: InfoItem[]
  nota: number
  image: string
  id: string
}

const Product = ({ title, description, infos, image, nota, id }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 308) {
      return description.slice(0, 305) + '...'
    }
    return description
  }

  return (
    <Card>
      <IMG src={image} alt={title} />
      <Infos>
        {infos.map((info, index) => (
          <Tag key={index}>{`${info.tipo}`}</Tag>
        ))}
      </Infos>
      <div className="containerTop">
        <Titulo>{title}</Titulo>
        <Titulo2>
          <h3>{nota}</h3>
          <img src={star} alt="estrela amarela" />
        </Titulo2>
      </div>
      <Descricao>{getDescription(description)}</Descricao>
      <Button to={id} type="link" title={'Saiba mais'}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default Product
