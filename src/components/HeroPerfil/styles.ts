import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.header`
  height: 186px;
  font-weight: bold;
  align-items: center;
  max-width: 2031.81px;

  .container {
    width: 1024px;
    display: flex;
    justify-content: space-between;
  }
`
export const Titulo = styled.a`
  margin-top: 59px;
  font-size: 18px;
  margin-bottom: 82px;
  color: ${cores.vermelho};
  text-decoration: none;
`
export const Titulo2 = styled.p`
  margin-top: 59px;
  font-size: 18px;
  color: ${cores.vermelho};
`
export const Img = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 39px;
`
