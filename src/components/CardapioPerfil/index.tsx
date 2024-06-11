import { useState } from 'react'
import { useDispatch } from 'react-redux'

import fechar from '../../assets/images/close.svg'
import { add, open } from '../../store/reducers/cart'

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
import Card from '../Card'

export type Props = {
  items: Restaurant
  pedido: Pedido
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductPerfil = ({ items, pedido }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [foodTitle, setfoodTitle] = useState('')
  const [foodDescription, setfoodDescription] = useState('')
  const [foodPhoto, setfoodPhoto] = useState('')
  const [foodPhotoAlt, setfoodPhotoAlt] = useState('')
  const [foodServe, setfoodServe] = useState('')
  const [foodPrice, setfoodPrice] = useState(0)
  const [foodId, setFoodId] = useState(0)

  const dispatch = useDispatch()

  const addToCart = () => {
    pedido.id = foodId
    pedido.nome = foodTitle
    pedido.foto = foodPhoto
    pedido.preco = foodPrice
    dispatch(add(items))
    setShowModal(false)
    dispatch(open())
  }

  const getDescription = (description: string) => {
    if (description.length > 110) {
      return description.slice(0, 107) + '...'
    }
    return description
  }

  return (
    <>
      {items.cardapio.map((item) => (
        <div key={item.id}>
          <CardPerfil
            onClick={() => {
              setShowModal(true)
              setfoodTitle(item.nome)
              setfoodDescription(item.descricao)
              setfoodServe(item.porcao)
              setfoodPrice(item.preco)
              setfoodPhotoAlt(item.nome)
              setfoodPhoto(item.foto)
              setFoodId(item.id)
            }}
          >
            <IMG src={item.foto} alt={item.nome} />
            <div>
              <Titulo>{item.nome}</Titulo>
            </div>
            <Description>{getDescription(item.descricao)}</Description>
            <Button>Mais detalhes</Button>
          </CardPerfil>
          <Modal className={showModal ? 'visivel' : ''}>
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
                  onClick={() => setShowModal(false)}
                />
              </CloseIconModal>
            </ModalContent>
            <div onClick={() => setShowModal(false)} className="overlay"></div>
          </Modal>
        </div>
      ))}
    </>
  )
}

export default ProductPerfil
