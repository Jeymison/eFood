import { useState } from 'react'
import fechar from '../../assets/images/close.svg'
import {
  Button,
  CardPerfil,
  CloseIconModal,
  ContainerModal,
  Description,
  DescriptionModal,
  IMG,
  Modal,
  ModalContent,
  PizzaImgmodal,
  TitleModal,
  Titulo
} from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Restaurants } from '../../Pages/Home'

type Props = {
  items: Restaurants
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductPerfil = ({ items }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const getDescription = (description: string) => {
    if (description.length > 110) {
      return description.slice(0, 107) + '...'
    }
    return description
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(items))
    dispatch(open())
  }

  return (
    <>
      {items.cardapio.map((item) => (
        <>
          <CardPerfil key={item.id}>
            <IMG src={item.foto} alt={item.nome} />
            <div>
              <Titulo>{item.nome}</Titulo>
            </div>
            <Description>{getDescription(item.descricao)}</Description>
            <Button onClick={() => setModalAberto(true)}>Mais detalhes</Button>
          </CardPerfil>
          <Modal className={modalAberto ? 'visivel' : ''}>
            <ModalContent>
              <PizzaImgmodal src={item.foto} alt={item.nome} />
              <ContainerModal>
                <TitleModal>{item.nome}</TitleModal>
                <DescriptionModal>
                  {item.descricao} <br />
                  <br />
                  {item.porcao}
                </DescriptionModal>
                <Button onClick={addToCart}>
                  Adicionar ao carrinho - {formataPreco(item.preco)}
                </Button>
              </ContainerModal>
              <CloseIconModal>
                <img
                  src={fechar}
                  alt="Icone de fechar"
                  onClick={() => setModalAberto(false)}
                />
              </CloseIconModal>
            </ModalContent>
            <div
              onClick={() => setModalAberto(false)}
              className="overlay"
            ></div>
          </Modal>
        </>
      ))}
    </>
  )
}

export default ProductPerfil
