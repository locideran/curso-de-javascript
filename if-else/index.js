// If..Else


/* Se a hora estiver entre 06:00 até 12:00 : bom dia!
Se estiver entre 12:00 até 18:00 : Boa tarde!
Caso contrário : Boa noite! */

let hora = 10

if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa Tarde!')    
} else { //não precisa de condições
    console.log('Boa noite!')
}

