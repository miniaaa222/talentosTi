
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?
// está recebendo o numero via prompt.

// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?
//se for digitado 10 vai ser imprimido a mensagem da linha 7
// a variavel da linha 8 esta declarada mais nunca lida
//se fosse digitado -10 não imprimiria nada porque -10 não é maior que 0.

// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//a linha 11 não pode  imprimir a varivel da linha 8 porque ela dentre do escopo do laço if então seu valor esta undefined.
