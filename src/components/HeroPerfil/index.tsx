import heroPerfil from '../../assets/images/heroPerfil.svg'
import logo from '../../assets/images/logo.svg'
import { Imagem, Img, Titulo, Titulo2 } from './styles'

const HeroPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${heroPerfil})` }}>
    <div className="container">
      <Titulo>Restaurantes</Titulo>
      <Img src={logo} />
      <Titulo2>0 produto(s) no carrinho</Titulo2>
    </div>
  </Imagem>
)

export default HeroPerfil
