import Product from '../Product'
import { Container, List } from './styles'

const ProductsList = () => (
  <Container>
    <List>
      <Product
        title="Hioki Sushi "
        description="teste"
        infos={['Destaque da semana', 'Japonesa']}
        image="//placehold.it/472x217"
      />
      <Product
        title="Hioki Sushi "
        description="teste"
        infos={['Italiana']}
        image="//placehold.it/472x217"
      />
      <Product
        title="Hioki Sushi "
        description="teste"
        infos={['Italiana']}
        image="//placehold.it/472x217"
      />
      <Product
        title="Hioki Sushi "
        description="teste"
        infos={['Italiana']}
        image="//placehold.it/472x217"
      />
      <Product
        title="Hioki Sushi "
        description="teste"
        infos={['Italiana']}
        image="//placehold.it/472x217"
      />
      <Product
        title="Hioki Sushi "
        description="teste"
        infos={['Italiana']}
        image="//placehold.it/472x217"
      />
    </List>
  </Container>
)

export default ProductsList
