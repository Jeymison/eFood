import { useState } from 'react'
import fechar from '../../assets/images/close.svg'
import pizzaPopUp from '../../assets/images/pizzaPopUp.svg'
import {
  Button,
  CardPerfil,
  CloseIconModal,
  ContainerModal,
  Description,
  DescriptionModal,
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
  id: number
}

const ProductPerfil = ({ title, description, image }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <CardPerfil>
        <img src={image} alt={title} />
        <div>
          <Titulo>{title}</Titulo>
        </div>
        <Description>{description}</Description>
        <Button onClick={() => setModalAberto(true)}>Mais detalhes</Button>
      </CardPerfil>

      <Modal className={modalAberto ? 'visivel' : ''}>
        <ModalContent>
          <PizzaImgmodal src={pizzaPopUp} alt="pizza" />
          <ContainerModal>
            <TitleModal>Pizza Marguerita</TitleModal>
            <DescriptionModal>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br />
              <br />
              Serve: de 2 a 3 pessoas
            </DescriptionModal>
            <Button>Adicionar ao carrinho - R$ 60,90</Button>
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
