import styled from 'styled-components'
import { cores } from '../../styles'

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.8;
`
export const CardSideBar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  h2 {
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
    color: ${cores.bege};
    margin-bottom: 16px;
  }

  button {
    display: block;
    width: 100%;
    height: 24px;
    background-color: ${cores.bege};
    border: ${cores.bege};
    margin-bottom: 8px;
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }

  button:first-of-type {
    margin-top: 24px;
  }
`
export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    width: 100%;
    margin-top: 8px;
    font-weight: bold;
    line-height: 16px;
  }

  input {
    border: 1px solid ${cores.bege};
    width: 100%;
    height: 32px;
    background-color: ${cores.bege};
  }
`
