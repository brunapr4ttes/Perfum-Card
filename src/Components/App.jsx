import { Imagem, Card, Categoria, Titulo, LadoDois, Paragrafo, PriceTags, PriceOne, PriceTwo, Button} from '../Styles/App'
import perfume from '../images/image-product-desktop.jpg'
import cart from '../images/icon-cart.svg'

function App() {

  return (
    <>
    <Card>
      <section>
        <Imagem src={perfume} alt=""></Imagem>
      </section>

      <LadoDois>

      <Categoria>P E R F U M E</Categoria>

      <Titulo>Gabrielle Essence Eau De Parfum</Titulo>
      
      <Paragrafo>A floral, solar and voluptuous interretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</Paragrafo>

      <PriceTags>
      <PriceOne>$149.99</PriceOne>
      <PriceTwo>$169.99</PriceTwo>
      </PriceTags>
      <Button>
        <img src={cart} alt="" />
        <p>Add to Cart</p>
        </Button>
      </LadoDois>

    </Card>
    </>
  )
}

export default App
