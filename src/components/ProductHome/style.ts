import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: solid 1px ${cores.vermelho};
  position: relative;

  .containerTop {
    display: flex;
    justify-content: space-between;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  margin-left: 8px;
`
export const Titulo2 = styled.div`
  display: flex;

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
    margin-right: 8px;
  }

  img {
    margin-right: 8px;
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-left: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
