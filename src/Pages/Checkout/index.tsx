import { useFormik } from 'formik'
import { CardSideBar, InputGroup, Row } from './styles'

import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { payment } from '../../store/reducers/cart'

type Props = {
  checkoutStart?: boolean
  priceTotal: number
}

const Checkout = ({ checkoutStart = false, priceTotal = 0 }: Props) => {
  //Chamando a API metodo POST
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const activePayment = () => {
    if (
      form.values.receiver &&
      form.values.address &&
      form.values.city &&
      form.values.zipCode &&
      form.values.number
    ) {
      dispatch(payment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      codeCard: '',
      monthExpires: '',
      yearExpires: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Preenchimento Obrigatório'),
      address: Yup.string().required('Preenchimento Obrigatório'),
      city: Yup.string().required('Preenchimento Obrigatório'),
      zipCode: Yup.string().required('Preenchimento Obrigatório'),
      number: Yup.string().required('Preenchimento Obrigatório'),
      nameCard: Yup.string().required('Preenchimento Obrigatório'),
      numberCard: Yup.string().required('Preenchimento Obrigatório'),
      codeCard: Yup.string().required('Preenchimento Obrigatório'),
      monthExpires: Yup.string().required('Preenchimento Obrigatório'),
      yearExpires: Yup.string().required('Preenchimento Obrigatório')
    }),
    //Chamando a API
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: Number(values.codeCard),
            expires: {
              month: Number(values.monthExpires),
              year: Number(values.yearExpires)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })

  const getErrorMessage = (campo: string, message?: string) => {
    const estaAlterado = campo in form.touched
    const estaInvalido = campo in form.errors
    if (estaAlterado && estaInvalido) {
      return message
    }
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CardSideBar>
        <div>
          <h2>Entrega</h2>
          <InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              id="receiver"
              type="text"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('address', form.errors.address)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('city', form.errors.city)}</small>
          </InputGroup>
          <Row>
            <InputGroup>
              <label htmlFor="zipCode">CEP</label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Numero</label>
              <input
                id="number"
                type="text"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </InputGroup>
          </Row>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
          <button type="submit" onClick={activePayment}>
            Continuar com o pagamento
          </button>
          <button>Voltar para o carrinho</button>
        </div>
      </CardSideBar>
      <CardSideBar>
        <div>
          <h2>Pagamento - Valor a pagar R$</h2>
          <InputGroup>
            <label htmlFor="nameCard">Nome no cartão</label>
            <input
              id="nameCard"
              type="text"
              name="nameCard"
              value={form.values.nameCard}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('nameCard', form.errors.nameCard)}</small>
          </InputGroup>
          <Row>
            <InputGroup maxWidth="228px">
              <label htmlFor="numberCard">Número do cartão</label>
              <input
                id="numberCard"
                type="text"
                name="numberCard"
                value={form.values.numberCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('numberCard', form.errors.numberCard)}
              </small>
            </InputGroup>
            <InputGroup maxWidth="87px">
              <label htmlFor="codeCard">CVV</label>
              <input
                id="codeCard"
                type="text"
                name="codeCard"
                value={form.values.codeCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('codeCard', form.errors.codeCard)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup maxWidth="155px">
              <label htmlFor="monthExpires">Mês de vencimento</label>
              <input
                id="monthExpires"
                type="text"
                name="monthExpires"
                value={form.values.monthExpires}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('monthExpires', form.errors.monthExpires)}
              </small>
            </InputGroup>
            <InputGroup maxWidth="155px">
              <label htmlFor="yearExpires">Ano de vencimento</label>
              <input
                id="yearExpires"
                type="text"
                name="yearExpires"
                value={form.values.yearExpires}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('yearExpires', form.errors.yearExpires)}
              </small>
            </InputGroup>
          </Row>
          <button type="button">Finalizar o pagamento</button>
          <button type="button">Voltar para a edição de endereço</button>
        </div>
      </CardSideBar>
      <CardSideBar>
        <div>
          <h2>Pedido realizado - numero do pedido aqui</h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <br />
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <br />
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <button type="button">Concluir</button>
        </div>
      </CardSideBar>
    </form>
  )
}

export default Checkout
