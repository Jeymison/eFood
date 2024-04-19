import bannerHome from '../../assets/images/bannerHome.svg'
import logo from '../../assets/images/logo.svg'
import { Imagem, Img, Titulo } from './styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerHome})` }}>
    <Img src={logo} />
    <div>
      <Titulo>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Titulo>
    </div>
  </Imagem>
)

export default Banner
