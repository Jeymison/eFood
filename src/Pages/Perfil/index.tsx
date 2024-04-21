import Food from '../../Models/Food'
import ProductsList from '../../components/ProductsListHome'

import macarraoCamarao from '../../assets/images/macarraoCamarao.svg'
import HeroPerfil from '../../components/HeroPerfil'
import BannerPerfil from '../../components/BannerPerfil'

const foodList: Food[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: macarraoCamarao
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
  }
]

const Perfil = () => (
  <>
    <HeroPerfil />
    <BannerPerfil />
    <ProductsList foods={foodList} />
  </>
)

export default Perfil
