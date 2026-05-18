class Animal {
  constructor(public nome: string) {}

  falar(): string {
    return `${this.nome} faz um som`
  }
}

class Cachorro extends Animal {
  falar(): string {
    return `${this.nome} late!`
  }
}

const dog = new Cachorro('Rex')
console.log(dog.falar())