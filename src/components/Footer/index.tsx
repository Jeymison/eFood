import logo from '../../assets/images/logo.svg'
import redesSociais from '../../assets/images/redes sociais.svg'
import { Container, Frase, Img, SectionRedes } from './styles'

const Footer = () => (
  <Container>
    <Img src={logo} alt="logo" />
    <SectionRedes>
      <img src={redesSociais} alt="Redes Sociais" />
    </SectionRedes>
    <Frase>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Frase>
  </Container>
)

export default Footer
