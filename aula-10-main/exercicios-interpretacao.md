
# Interpretação de código

Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.

---

#### 1. Indique todas as mensagens impressas no console, sem executar o programa.

```
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
```

---

#### 2. Leia o código abaixo com atenção.

```
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
```

Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
