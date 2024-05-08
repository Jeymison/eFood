import styled from 'styled-components'
import { GlobalCSS, breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding-left: 12%;
  }
`
