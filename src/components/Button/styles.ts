import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'
import { Props } from '.'

//Botao dos cards
export const ButtonContainer = styled(Link)<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 6px 4px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  display: inline-block;
`
