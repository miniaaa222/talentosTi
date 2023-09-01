/**
 *
 * Fa�a um programa que verifica que turno do dia um aluno estuda.
 *
 * Pe�a para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".
 *
 **/
let turno = prompt(
  "qual seu turno? \n  M (matutino) \n V (vespertino) \n N (noturno)"
).toLocaleUpperCase();

if (turno === "M") {
  console.log("Bom dia!");
} else if (turno === "V") {
  console.log("boa Tarde!");
} else if (turno === "N") {
  console.log("boa noite!");
} else {
  console.log("turno invalido");
}
