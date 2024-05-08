import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import heroPerfil from '../../assets/images/heroPerfil.svg'
import logo from '../../assets/images/logo.svg'
import { Imagem, Img, Titulo, CartButton } from './styles'
import { RootReducer } from '../../store'

const HeroPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${heroPerfil})` }}>
      <div className="container">
        <Titulo href="/">Restaurantes</Titulo>
        <Img src={logo} alt="Logo do restaurante" />
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </Imagem>
  )
}

export default HeroPerfil
