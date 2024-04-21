import { Link } from 'react-router-dom'
import { ButtonContainer } from './styles'

export type Props = {
  type?: 'button' | 'link'
  title?: string
  to?: string
  children: string
  onClick?: () => void
}

//Botao dos cards
const Button = ({ type = 'link', to, children }: Props) => (
  <ButtonContainer type={type} to={to as string}>
    {children}
  </ButtonContainer>
)

export default Button
