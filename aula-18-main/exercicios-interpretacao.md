
# Interpreta��o de c�digo

Tente responder os exerc�cios dessa se��o sem executar o c�digo.  
Se ficar muito dif�cil, pode rodar no seu computador para analisar e pensar sobre o resultado.

---

#### 1. Leia o c�digo

O que o c�digo abaixo est� fazendo? Qual o resultado impresso no console?

```
let valor = 0

for (let i = 0; i < 5; i++) {
	valor += i
}

console.log(valor)
```

---

#### 2. Leia o c�digo

```
const lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30 ]

for (let numero of lista) {
	if (numero > 18) {
		console.log(numero)
	}
}
```

a) O que vai ser impresso no console?

b) Se eu quisesse acessar o �ndice de cada elemento dessa lista, a sintaxe `for...of...` � suficiente? Se sim, o que poderia ser usado para fazer isso?

---

#### 3. Leia o c�digo

Qual seria o resultado impresso no console, se o usu�rio digitasse o n�mero "4"?

```
let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))

while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}
```
