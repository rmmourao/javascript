function fatorial(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial(n-1) // fatorial é uma função recursiva pois é chamada dentro dela mesmo
  }
}

console.log(fatorial(1))
console.log(fatorial(5))