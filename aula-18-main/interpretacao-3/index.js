
// Qual seria o resultado impresso no console, se o usu�rio digitasse o n�mero "4"?

let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))

while (quantidadeAtual < quantidadeTotal) {
	//while está verificando uma comdição qua quantidadeAtual é menor que a quantidadeTotal.
	let linha = ""
   //declar uma varialvel de string vazia

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		//declara um * para cada vez que o laço for rodar
		linha += "*"
		//adiciona um para cada vez que o laço for rodar.

	}

	console.log(linha)
	  //imprime o valor de linha.
	quantidadeAtual++
	//soma um valor variavel quantidadeIdadeAtual.
}  
