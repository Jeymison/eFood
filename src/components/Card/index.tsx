import { CardContainer } from './styles'

type Props = {
  children: JSX.Element
}

const Card = ({ children }: Props) => (
  <CardContainer className="is-open">{children}</CardContainer>
)

export default Card
