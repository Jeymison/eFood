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
              title={pizzas.cardapio}
              description={pizzas.cardapio.descricao}
              image={pizzas.cardapio.foto}
              porcao={pizzas.cardapio.porcao}
              preco={pizzas.cardapio.preco}
              id={pizzas.cardapio.id}
            />
          </li>
        ))}
      </List>
    </Container>
  </>
)

export default ProductsListPerfil
