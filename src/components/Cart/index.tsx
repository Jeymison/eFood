import Button from '../Button'
import {
  CartContainer,
  CartItem,
  ContainerPrices,
  Overlay,
  Prices,
  SideBar,
  TextoPrices
} from './styles'

import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardapioPerfil'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  // Calculo total do carrinho
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.cardapio[0].preco)
    }, 0)
  }
  // Funcao para remover itens do carrinho
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  //Funcao para ir para proxima tela/ Button
  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) =>
            item.cardapio.map((foods) => (
              <CartItem key={foods.id}>
                <img src={foods.foto} />
                <div>
                  <h3>{foods.nome}</h3>
                  <span>{formataPreco(foods.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </CartItem>
            ))
          )}
        </ul>
        <ContainerPrices>
          <TextoPrices>Valor total</TextoPrices>
          <Prices>{formataPreco(getTotalPrice())}</Prices>
        </ContainerPrices>
        <Button
          to="/checkout"
          onClick={goToCheckout}
          type="button"
          title="Clique aqui para continuar com a compra"
        >
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}
export default Cart
