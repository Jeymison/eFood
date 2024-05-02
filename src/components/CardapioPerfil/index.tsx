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

type Props = {
  title: string
  description: string
  image: string
  porcao: string
  preco: number
}

const ProductPerfil = ({ title, description, image, porcao, preco }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const getDescription = (description: string) => {
    if (description.length > 110) {
      return description.slice(0, 107) + '...'
    }
    return description
  }
  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <CardPerfil>
        <IMG src={image} alt={title} />
        <div>
          <Titulo>{title}</Titulo>
        </div>
        <Description>{getDescription(description)}</Description>
        <Button onClick={() => setModalAberto(true)}>Mais detalhes</Button>
      </CardPerfil>

      <Modal className={modalAberto ? 'visivel' : ''}>
        <ModalContent>
          <PizzaImgmodal src={image} alt="pizza" />
          <ContainerModal>
            <TitleModal>{title}</TitleModal>
            <DescriptionModal>
              {description} <br />
              <br />
              {porcao}
            </DescriptionModal>
            <Button>Adicionar ao carrinho - {formataPreco(preco)}</Button>
          </ContainerModal>
          <CloseIconModal>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => setModalAberto(false)}
            />
          </CloseIconModal>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default ProductPerfil
