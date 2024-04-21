import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  height: 163px;
  font-weight: bold;
  align-items: center;

  .container {
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
`
export const Titulo = styled.a`
  margin-top: 39px;
  font-size: 18px;
  color: ${cores.vermelho};
  text-decoration: none;
`
export const Titulo2 = styled.p`
  margin-top: 39px;
  font-size: 18px;
  color: ${cores.vermelho};
`
export const Img = styled.img`
  margin-top: 40px;
  height: 57px;
  width: 125px;
`
