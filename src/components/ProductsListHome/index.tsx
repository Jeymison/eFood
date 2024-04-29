import { Food } from '../../Pages/Home'
import Product from '../ProductHome'
import { Container, List } from './styles'

export type Props = {
  foods: Food[]
}
// aqui apliquei o models FOOD para criar a lista de foods
const ProductsList = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map((food) => (
        <Product
          key={food.id}
          title={food.titulo}
          description={food.descricao}
          infos={food.infos}
          image={food.capa}
          nota={food.avaliacao}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
