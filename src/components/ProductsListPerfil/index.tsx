import { Food } from '../../Pages/Home'
import ProductPerfil from '../ProductPerfil'
import { Container, List } from './styles'

type Props = {
  pizzas: Food[]
}

const ProductsListPerfil = ({ pizzas }: Props) => (
  <>
    <Container>
      <List>
        {pizzas.map((pizzas) => (
          <li key={pizzas.id}>
            <ProductPerfil
              title={pizzas.titulo}
              description={pizzas.descricao}
              image={pizzas.capa}
            />
          </li>
        ))}
      </List>
    </Container>
  </>
)

export default ProductsListPerfil
