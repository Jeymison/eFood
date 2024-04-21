import Food from '../../Models/Food'
import Product from '../ProductHome'
import { Container, List } from './styles'

export type Props = {
  foods: Food[]
}
// aqui apliquei o models FOOD para criar a lista de foods
const ProductsListHome = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map((food) => (
        <Product
          key={food.id}
          title={food.title}
          description={food.description}
          infos={food.infos}
          image={food.image}
          nota={food.nota}
        />
      ))}
    </List>
  </Container>
)

export default ProductsListHome
