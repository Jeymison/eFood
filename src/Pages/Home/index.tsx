import Food from '../../Models/Food'
import ProductsList from '../../components/ProductsListHome'

import sushi from '../../assets/images/sushi.svg'
import macarraoCamarao from '../../assets/images/macarraoCamarao.svg'
import Hero from '../../components/HeroHome'

const foodList: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida, Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: macarraoCamarao
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: macarraoCamarao
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: macarraoCamarao
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: macarraoCamarao
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: macarraoCamarao
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductsList foods={foodList} />
  </>
)

export default Home
