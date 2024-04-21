import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const Titulo = styled.h2`
  line-height: 42px;
  width: 100%;
  max-width: 580px;
  text-align: center;
  margin-left: 414px;
  margin-top: 150px;
  font-size: 36px;

  color: ${cores.vermelho};
`
export const Img = styled.img`
  margin-left: 621px;
  margin-top: 40px;
  width: 125px;
`
