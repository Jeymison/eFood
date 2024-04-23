import { Imagem } from './styles'
import bannerPerfil from '../../assets/images/bannerCamaraoMacarrao.svg'

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${bannerPerfil})` }}>
    <div className="container">
      <h3>Italiana</h3>
      <h1>La Dolce Vita Trattoria</h1>
    </div>
  </Imagem>
)

export default BannerPerfil
