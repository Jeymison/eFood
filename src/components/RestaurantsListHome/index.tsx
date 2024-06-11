import Product from '../RestaurantsHome'
import { Container, List } from './styles'

export type InfoItem = {
  destacado: boolean
  tipo: string
}

type Props = {
  foods: Restaurant[]
}

const ProductsList = ({ foods }: Props) => {
  const getTags = (food: Restaurant): InfoItem[] => {
    const tags: InfoItem[] = []

    if (food.destacado) {
      tags.push({ destacado: true, tipo: 'Destaque da semana' })
    }

    if (food.tipo) {
      tags.push({
        tipo: food.tipo,
        destacado: false
      })
    }

    return tags
  }

  return (
    <Container>
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            id={`/cardapio/${food.id}`}
            title={food.titulo}
            description={food.descricao}
            infos={getTags(food)}
            image={food.capa}
            nota={food.avaliacao}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductsList
