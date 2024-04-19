import Button from '../Button'
import star from '../../assets/images/star_favorite.svg'
import { Card, Descricao, Titulo, Titulo2 } from './style'

const Product = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <div className="containerTop">
      <Titulo>Nome da comida </Titulo>
      <Titulo2>
        <h3>4.9</h3>
        <img src={star} alt="Estrela amarela" />
      </Titulo2>
    </div>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro explicabo
      culpa est, tenetur voluptatum libero pariatur officiis unde cum vero,
      quas, molestiae quo saepe in eligendi? Incidunt velit hic minus.
    </Descricao>
    <Button type="link" title={'Saiba mais'}>
      Saiba mais
    </Button>
  </Card>
)

export default Product
