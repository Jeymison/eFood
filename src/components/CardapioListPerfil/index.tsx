import { Restaurants } from '../../Pages/Home'
import ProductPerfil from '../CardapioPerfil'
import { Container, List } from './styles'

type Props = {
  cardapios: Restaurants
}

const ProductsListPerfil = ({ cardapios }: Props) => (
  <>
    <Container>
      <List>
        {cardapios.cardapio.map((pratos) => (
          <li key={pratos.id}>
            <ProductPerfil
              title={pratos.nome}
              description={pratos.descricao}
              image={pratos.foto}
              porcao={pratos.porcao}
              preco={pratos.preco}
            />
          </li>
        ))}
      </List>
    </Container>
  </>
)

export default ProductsListPerfil
