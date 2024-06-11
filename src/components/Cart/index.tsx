import Button from '../Button'
import {
  CartContainer,
  CartItem,
  CartStage,
  ContainerPrices,
  Overlay,
  Prices,
  SideBar,
  TextoPrices
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, startCheckout } from '../../store/reducers/cart'
import { formataPreco } from '../CardapioPerfil'
import Checkout from '../../Pages/Checkout'

const Cart = () => {
  const { isOpen, pedido, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(close())
  }

  const activeCheckout = () => {
    if (getTotalPrice() > 0) {
      dispatch(startCheckout())
    } else {
      alert('Não há itens no carrinho')
    }
  }

  // Calculo total do carrinho
  const getTotalPrice = () => {
    return pedido.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  // Funcao para remover itens do carrinho
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={openCart} />
      <SideBar>
        <CartStage className={!isCart ? 'is-checkout' : ''} />
        <ul>
          {pedido.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <ContainerPrices>
          <TextoPrices>Valor total</TextoPrices>
          <Prices>{formataPreco(getTotalPrice())}</Prices>
        </ContainerPrices>
        <Button onClick={activeCheckout}>Continuar com a entrega</Button>
        <Checkout checkoutStart={isAddress} priceTotal={getTotalPrice()} />
      </SideBar>
    </CartContainer>
  )
}
export default Cart
