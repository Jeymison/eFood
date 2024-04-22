import bannerHome from '../../assets/images/bannerHome.svg'
import logo from '../../assets/images/logo.svg'
import { Imagem, Img, Titulo } from './styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${bannerHome})` }}>
    <Img src={logo} />
    <Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
  </Imagem>
)

export default Hero
