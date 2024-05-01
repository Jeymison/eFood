import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  display: block;
  height: 280px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  align-items: center;

  h1 {
    color: ${cores.branco};
    height: 33.25px;
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
