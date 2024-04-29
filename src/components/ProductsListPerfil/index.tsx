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
          <ProductPerfil
            key={pizzas.cardapio.id}
            title={pizzas.cardapio.nome}
            description={pizzas.cardapio.descricao}
            image={pizzas.cardapio.foto}
          />
        ))}
      </List>
    </Container>
  </>
)

export default ProductsListPerfil
