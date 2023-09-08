
/**
 * 
 * Pergunte ao usu�rio quantos bichos de estima��o ele tem e guarde esse dado em uma vari�vel.
 * 
 * Se a quantidade for 0, imprima no console "Que pena! Voc� pode adotar um pet!".
 * 
 * Se a quantidade for maior que 0, solicite que o usu�rio digite os nomes deles, um por um, e guarde esses nomes em um array.
 * Dica: coloque um "prompt" dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usu�rio inseriu. Por exemplo: se o usu�rio tem 4 pets, ele deve conseguir inserir 4 nomes.
 * Por fim, imprima no console o "array" completo, com os nomes dos bichos.
 * 
**/
let bichoQuantidade = Number(prompt("Quantos animais de estimação você tem"))

if(bichoQuantidade === 0) {
    console.log("Que pena você! Vode adotar um pet")
}

let i = 0 
let listaBicho = []

while(i < bichoQuantidade){
    nomeBichos = prompt("Diga o nome do seu bicho")
    listaBicho.push(nomeBichos)
    i++
}

console.log(listaBicho)