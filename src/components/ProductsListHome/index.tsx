import { Food } from '../../Pages/Home'
import Product from '../ProductHome'
import { Container, List } from './styles'

export type InfoItem = {
  destacado: boolean
  tipo: string
}

type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => {
  const getTags = (food: Food): InfoItem[] => {
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
          <li key={food.id}>
            <Product
              id={food.id}
              title={food.titulo}
              description={food.descricao}
              infos={getTags(food)}
              image={food.capa}
              nota={food.avaliacao}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}

export default ProductsList
