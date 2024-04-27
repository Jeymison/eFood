import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

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

// modal

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  height: 344px;
  background-color: ${cores.vermelho};

  display: flex;
  flex-direction: row;
  justify-content: center;

  ${Button} {
    max-width: 218px;
    height: 24px;
    line-height: 16.41px;
    padding: 7px 4px auto;
    margin: 0;
  }
`

export const PizzaImgmodal = styled.img`
  padding: 32px 24px;
`
export const ContainerModal = styled.div`
  width: 100%;
  padding: 32px 0px;
`

export const TitleModal = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
  margin-bottom: 16px;
`
export const DescriptionModal = styled.p`
  height: 176px;
  font-size: 14px;
  font-weight: 400;
  color: ${cores.branco};
  line-height: 22px;
  margin-bottom: 16px;
`

export const CloseIconModal = styled.header`
  width: 16px;
  height: 16px;
  padding: 8px 24px;
`
