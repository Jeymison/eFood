import ProductPerfil from '../CardapioPerfil'
import { Container, List } from './styles'

type Props = {
  cardapios: Restaurant
}

const ProductsListPerfil = ({ cardapios }: Props) => (
  <>
    <Container>
      <List>
        {cardapios.cardapio.map((pratos) => (
          <li key={pratos.id}>
            <ProductPerfil
              items={{
                id: pratos.id,
                titulo: pratos.nome,
                destacado: false,
                tipo: '',
                avaliacao: 0,
                descricao: pratos.descricao,
                capa: '',
                cardapio: [pratos]
              }}
              pedido={{
                id: 0,
                nome: '',
                foto: '',
                preco: 0
              }}
            />
          </li>
        ))}
      </List>
    </Container>
  </>
)

export default ProductsListPerfil
