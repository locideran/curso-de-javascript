/* 1. For
2. While
3. Do.. While
4. For..In
5. For..of
*/

// 1. For
// for(let i = 5; i >= 0; i--) {
//     if(i % 2 !==0) {
//         console.log(i)
//     }
// }


// 2. For..While
// let i = 5
// while (i >= 1) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//     i--
// }

// 3. Do..While
// let i = 0 
// do {
//     console.log('digitando!')
//     i++
// } while (i < 10)

// 4. For..In

const pessoa = {
    nome: 'Gabriel',
    idade: 27
}

for(let chave in pessoa) {
    console.log(chave,pessoa['nome'])
}

const cores = ['Vermelho','Azul','Verde']

for (let indice in cores){
    console.log(indice,cores[indice])
}

// 5. For..Of

for(let cor of cores) {
    console.log(cor)
}