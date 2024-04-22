import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`

export const Titulo = styled.h4`
  max-width: 539px;
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  color: ${cores.vermelho};
`
export const Img = styled.img`
  height: 57.5px;
  margin-top: 40px;
  width: 125px;
`
