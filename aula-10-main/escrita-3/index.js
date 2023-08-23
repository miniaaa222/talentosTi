
/**
 * 
 * Fa�a um programa, seguindo os passos:
 * 
 * 1. Crie um array vazio e guarde-o em uma vari�vel, chamada "listaDeTarefas".
 * 
 * 2. Pergunte ao usu�rio 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array.
 * 
 * 3. Imprima o array no console.
 * 
 * 4. Pe�a ao usu�rio que digite o �ndice de uma tarefa que ele j� realizou: 0, 1 ou 2.
 * 
 * 5. Remova da lista o item de �ndice que o usu�rio escolheu.
 * 
 * 6. Imprima o array no console
 * 
 * Dica: Para remover um item de um array, voc� pode utilizar a fun��o splice! Caso n�o se lembre como ela funciona, n�o tem nenhum problema, uma breve pesquisa no Google te trar� v�rios exemplos.
 * 
**/

let listaDeTarefas = []
console.log (listaDeTarefas)
let primeiraTarefa = prompt ("qual sua primeira tarefa?")

let segundaTarefa = prompt ("qual sua segunda tarefa?")

let terceiraTarefa = prompt ("qual sua terceira tarefa?")

listaDeTarefas.push (primeiraTarefa)
listaDeTarefas.push (segundaTarefa)
listaDeTarefas.push (terceiraTarefa)

console.log (listaDeTarefas)

let tarefaRealisada = prompt(" digite o indice tarefa que ja realizou")

listaDeTarefas.splice(tarefaRealisada,1)
console.log (listaDeTarefas)


