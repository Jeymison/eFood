//Criando o modelo de produto home
class Food {
  title: string
  description: string
  infos: string[]
  image: string
  id: number
  nota: string

  constructor(
    title: string,
    description: string,
    infos: string[],
    image: string,
    id: number,
    nota: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.infos = infos
    this.image = image
    this.nota = nota
  }
}

export default Food
