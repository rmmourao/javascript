/*
Um objeto é um array de dados de tipo diferentes que no lugar de índices tem títulos definidos pelo usuário.
Na verdade um array é um objeto, com índices numéricos e automáticos, um array também pode receber dados de tipos 
diferentes.
*/

let amigo = {
  nome: 'José',
  sexo: 'M',
  peso: 85.4,
  engordar(p=0) { // Uma função pode ser alocada dentro de um objeto
    console.log('Engordou')
    this.peso += p
  }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)