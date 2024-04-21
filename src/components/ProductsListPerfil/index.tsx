import cardPizzas from '../../Models/Perfil'
import ProductPerfil from '../ProductPerfil'
import { Container, List } from './styles'

type Props = {
  pizzas: cardPizzas[]
}

const ProductsListPerfil = ({ pizzas }: Props) => (
  <Container>
    <List>
      {pizzas.map((pizzas) => (
        <ProductPerfil
          key={pizzas.id}
          title={pizzas.title}
          description={pizzas.description}
          image={pizzas.image}
        />
      ))}
    </List>
  </Container>
)

export default ProductsListPerfil
