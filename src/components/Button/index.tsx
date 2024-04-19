import { ButtonContainer } from './styles'

export type Props = {
  type: 'button' | 'link'
  title?: string
  to?: string
  onclick?: () => void
  children: string
}

//Botao dos cards
const Button = ({ type = 'link', to, children }: Props) => (
  <ButtonContainer type={type} to={to as string}>
    {children}
  </ButtonContainer>
)

export default Button
