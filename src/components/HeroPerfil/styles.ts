import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

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
  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 10px;
  }
`
export const CartButton = styled.p`
  margin-top: 59px;
  font-size: 18px;
  color: ${cores.vermelho};
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    white-space: nowrap; /* Impede que o texto quebre em várias linhas */
    overflow: hidden;
    margin-left: 8px;
  }
`
export const Img = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 39px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
    height: 50%;
    margin-top: 6%;
  }
`
