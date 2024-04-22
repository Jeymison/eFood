import { Imagem } from './styles'
import bannerPerfil from '../../assets/images/bannerCamaraoMacarrao.svg'

const BannerPerfil = () => (
  <div className="container">
    <Imagem style={{ backgroundImage: `url(${bannerPerfil})` }}>
      <h3>Italiana</h3>
      <h1>La Dolce Vita Trattoria</h1>
    </Imagem>
  </div>
)

export default BannerPerfil
