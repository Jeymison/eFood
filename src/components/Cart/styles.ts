import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${cores.bege};

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    margin: 0;
    max-width: 100%;
    width: 100%;
    text-align: center;
  }
`
export const ContainerPrices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
`
export const TextoPrices = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16.41px;
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16.41px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-bottom: 12px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 16px;
    max-width: 140px;
    width: 100%;
    height: 21px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    display: block;
    color: ${cores.vermelho};
    font-weight: 400;
    font-size: 14px;
    flex-grow: 1;
  }

  button {
    background-image: url(${lixeira});
    max-width: 16px;
    width: 100%;
    height: 16px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    margin-top: 76px;
    margin-left: 84px;
    margin-bottom: 8px;
    margin-right: 8px;
  }
`
export const CartStage = styled.div`
  display: block;
  &.is-checkout {
    display: none;
  }
`
