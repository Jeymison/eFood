import { Imagem, Tipo, Titulo } from './styles'
import bannerPerfil from '../../assets/images/bannerMacarrao.svg'
import textoItaliana from '../../assets/images/Italiana.svg'

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${bannerPerfil})` }}>
    <div className="container">
      <img className="span" src={textoItaliana} alt="Italiana" />
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default BannerPerfil
