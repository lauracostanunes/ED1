import Stack from "./lib/Stack.mjs";

let pilha = new Stack();

console.log(pilha.print())
console.log("Está vazia?", pilha.isEmpty)

pilha.a(35)
pilha.a(77)
pilha.a(19)

console.log(pilha.print())
console.log("Está vazia?", pilha.isEmpty)

let removido = pilha.b()
console.log({removido}, pilha.print())

let ultimo = pilha.peek()
console.log({ultimo}, pilha.print())
