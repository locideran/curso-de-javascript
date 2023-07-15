/* FUNÇÕES
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/

function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32)
}

var x = paraCelsius(98);


alert("A temperatura é de " + x +" graus celsius")