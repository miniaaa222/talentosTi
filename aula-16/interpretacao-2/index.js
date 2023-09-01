
// Leia o c�digo abaixo, que foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado


let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
	case "Laranja":
		preco = 3.5
		break;
	case "Ma��":
		preco = 2.25
		break;
	case "Uva":
		preco = 0.30
		break;
	case "P�ra":
		preco = 5.5
		break; // BREAK PARA O ITEM D
	default:
		preco = 5
		break;
}

console.log("O pre�o da fruta ", fruta, " � ", "R$ ", preço)


// a) Para que serve o c�digo acima?
// serve para escolhermos alguma fruta e definir o valor

// b) Qual ser� a mensagem impressa no console, se o valor de fruta for "Ma��"?
// sera impresso o preço da fruta o valor e o preço
//("O pre�o da fruta ", Maça, " � ", "R$ ", 2,25)

// c) Considere que um usu�rio queira comprar uma "P�ra", qual seria a mensagem impressa no console se retir�ssemos o "break" que est� logo acima do "default" (o "break" indicado pelo coment�rio "BREAK PARA O ITEM D")?
//o preço da pera vai ser 5 por cauda da break