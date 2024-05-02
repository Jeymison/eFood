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
  position: relative;

  .container {
    position: relative;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 280px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
`
export const Titulo = styled.h1`
  color: ${cores.branco};
  height: 33.25px;
  font-size: 32px;
  font-weight: 900;
  padding-top: 156.5px;
  margin-left: 171px;
`

export const TituloHead = styled.h3`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  padding-top: 25px;
  margin-left: 171px;
`
