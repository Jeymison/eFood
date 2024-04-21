//Criando o modelo de produto Perfil

class cardPizzas {
  title: string
  description: string
  image: string
  id: number

  constructor(title: string, description: string, image: string, id: number) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
  }
}

export default cardPizzas
