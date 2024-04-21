import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    max-width: 100%;
    height: 384px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .span {
    margin-left: 230px;
    font-weight: normal;
    padding-top: 50px;
    max-width: 101px;
  }
`

export const Titulo = styled.h2`
  max-width: 676px;
  text-align: center;
  margin-top: 220px;
  font-size: 32px;
  margin-left: 60px;
  color: ${cores.branco};
  font-weight: bold;
`
export const Tipo = styled.p``
