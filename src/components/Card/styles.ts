import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
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
