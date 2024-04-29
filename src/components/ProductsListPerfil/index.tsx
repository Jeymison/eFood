import { Food } from '../../Pages/Home'
import ProductPerfil from '../ProductPerfil'
import { Container, List } from './styles'

export type Props = {
  pizzas: Food[]
}

const ProductsListPerfil = ({ pizzas }: Props) => (
  <>
    <Container>
      <List>
        {pizzas.map((pizzas) => (
          <ProductPerfil
            key={pizzas.id}
            title={pizzas.titulo}
            description={pizzas.descricao}
            image={pizzas.capa}
          />
        ))}
      </List>
    </Container>
  </>
)

export default ProductsListPerfil
