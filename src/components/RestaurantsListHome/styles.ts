import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
