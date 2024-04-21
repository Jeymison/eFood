import styled from 'styled-components'
import { cores } from '../../styles'

export const CardPerfil = styled.div`
  width: 320px;
  height: 338px;
  margin-top: 498px,
  margin-left: 171px;
  background-color: ${cores.vermelho};
  padding: 8px;
`

export const Titulo = styled.h3`
  font-size: 16px;
  color: ${cores.bege};
  font-weight: bold;
  line-height: 18px;
  margin-top: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  color: ${cores.bege};
  margin-top: 8px;
  padding-bottom: 8px;
  font-weight: 400px;
  line-height: 18px;
`
export const Button = styled.button`
  font-size: 14px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  margin: 8px 0px;
  width: 304px;
  height: 24px;
  border: none;
  font-weight: bold;
`
