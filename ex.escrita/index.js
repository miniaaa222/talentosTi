let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
/**
 * 
 * 
 * 
 * o console imprimiu undefriend,
 *  porque as variaveis ainda nao possuem valor ou tipo
 * 
 *
 * 
 */
nome = prompt("qual seu nome")
idade= Number(prompt("qual sua idade"))

console.log(typeof nome)
console.log(typeof idade)


/**
 * 
 * eu tive que atribuir o valor as variaveis
 * e tambem a variavel idade precisou ser tipada com o numero
 * 
 *  
 *
 * 
 */

console.log("Olá ", nome, "você tem" ,idade, " anos")