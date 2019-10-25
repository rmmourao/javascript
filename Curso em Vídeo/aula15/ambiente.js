let num = [5, 7, 9] // Define e popula um array, pode ser definido vazio
num[3] = 3 
num.push(1) // Os dois comandos atribem valores a um vetor, o 1º define o índice, o 2º é automático
num.sort() // Ordena um vetor em ordem crescente

console.log(`Nosso vetor é o ${num}.`)
console.log(`O tamanho do vetor é ${num.length}.`)
//console.log(`O primeiro elemento é ${num[0]}.`)
/*
for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} é o ${pos + 1}º elemento e tem o valor = ${num[pos]}.`)
}
*/
// A estrutura de repetição abaixo é simplificada mas só funciona para arrays
for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

let position = num.indexOf(7)
console.log(`O valor 7 está na posição ${position}.`)

let valor = 2
let location = num.indexOf(valor)
if (location == -1) {
  console.log(`O valor ${valor} não foi encontrado!`)
} else {
  console.log(`O valor ${valor} está na posição ${position}.`)
}
