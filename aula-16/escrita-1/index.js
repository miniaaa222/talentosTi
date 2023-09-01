/**
 *
 * Fa�a um programa que pergunta ao usu�rio a sua idade e imprima no console se ela/e pode dirigir (apenas maiores de idade).
 *
 * a) Fa�a um "prompt" para receber a idade do usu�rio e guarde em uma vari�vel.
 *
 * b) Garanta que essa vari�vel � do tipo "Number".
 *
 * c) Agora veja se essa idade do usu�rio corresponde � idade m�nima que permite dirigir. Se sim, imprima no console "Voc� pode dirigir", caso contr�rio, imprima "Voc� n�o pode dirigir."
 *
 **/
let idade = Number(prompt("voce é maior de idade?"));

if (idade >= 18)
{
  console.log("pode dirigir");
}
else
{
  console.log("não pode dirigir");
}
