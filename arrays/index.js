/* ARRAYS
Os arrays JavaScript são usados para amazenar vários valores em uma única variável. Diferente dos objetos, que funcionm com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição. 

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.

*/


const pessoa = [
    "Gabriel",
    "Mascarenhas",
    27
]

pessoa.splice(1,0,"intem adicionado 1","item adicionado2")


document.getElementById("teste").innerHTML = pessoa