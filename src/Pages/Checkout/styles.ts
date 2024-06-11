import styled from 'styled-components'
import { cores } from '../../styles'

type inputGroupProps = {
  maxWidth?: string
}

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.8;
`
export const CardSideBar = styled.div`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  color: ${cores.bege};
  position: fixed; /* Adicione esta linha para fixar o componente */
  top: 0;
  right: 0;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  &.is-open {
    display: flex;
  }

  h2 {
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
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
    cursor: pointer;
  }

  button:first-of-type {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`
export const buttonCheckout = styled.button``

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div<inputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

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
