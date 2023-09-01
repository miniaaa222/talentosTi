
/**
 * 
 * Repita o exerc�cio anterior, mas utilizando a estrutura de "switch/case".
 * 
 * Dica: Lembre-se que "switch/case" � como se fosse um "if", mas verifica somente igualdades estritas (===).
 * 
**/
let turno = prompt(
    "qual seu turno? \n  M (matutino) \n V (vespertino) \n N (noturno)"
  ).toLocaleUpperCase();

  switch (turno) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
       console.log("boa tarde!") 
       break;
       case "N":
       console.log ("boa noite!")
      break;

    default:
    console.log("turno invalido")
        break;
  }