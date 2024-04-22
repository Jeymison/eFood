import styled from 'styled-components'
import { cores } from '../../styles'
import bannerPerfil from '../../assets/images/bannerCamaraoMacarrao.svg'

export const Imagem = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 900;
    padding-top: 156.5px;
    margin-left: 171px;
  }

  h3 {
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 100;
    padding-top: 25px;
    margin-left: 171px;
  }
`
