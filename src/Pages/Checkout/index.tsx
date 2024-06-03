import Card from '../../components/Card'
import { CardOverlay, CardSideBar, InputGroup, Row } from './styles'

const Checkout = () => (
  <>
    <Card>
      <>
        <CardOverlay />
        <CardSideBar>
          <div>
            <h2>Entrega</h2>
            <InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input id="receiver" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input id="address" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" />
            </InputGroup>
          </div>
          <Row>
            <InputGroup>
              <label htmlFor="zipCode">CEP</label>
              <input id="zipCode" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Numero</label>
              <input id="number" type="text" />
            </InputGroup>
          </Row>
          <div>
            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input id="complement" type="text" />
            </InputGroup>
          </div>
          <button type="button">Continuar com o pagamento</button>
          <button type="button">Voltar para o carrinho</button>
        </CardSideBar>
      </>
    </Card>
    <Card>
      <></>
    </Card>
  </>
)

export default Checkout
