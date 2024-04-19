import { TagContainer } from './styles'

//Exportei para styles.ts
export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ size = 'small', children }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
