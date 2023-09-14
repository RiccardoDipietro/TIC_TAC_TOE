let b0 = document.querySelector('#b0')
let b1 = document.querySelector('#b1')
let b2 = document.querySelector('#b2')
let b3 = document.querySelector('#b3')
let b4 = document.querySelector('#b4')
let b5 = document.querySelector('#b5')
let b6 = document.querySelector('#b6')
let b7 = document.querySelector('#b7')
let b8 = document.querySelector('#b8')
let cella0 = document.querySelector('#cella0')
let cella1 = document.querySelector('#cella1')
let cella2 = document.querySelector('#cella2')
let cella3 = document.querySelector('#cella3')
let cella4 = document.querySelector('#cella4')
let cella5 = document.querySelector('#cella5')
let cella6 = document.querySelector('#cella6')
let cella7 = document.querySelector('#cella7')
let cella8 = document.querySelector('#cella8')
let c0 = 0
let c1 = 1
let c2 = 2
let c3 = 3
let c4 = 4
let c5 = 5
let c6 = 6
let c7 = 7
let c8 = 8
let counter = 0

b0.addEventListener('click', () =>{ XoO(cella0, c0)})
b1.addEventListener('click', () =>{ XoO(cella1, c1)})
b2.addEventListener('click', () =>{ XoO(cella2, c2)})
b3.addEventListener('click', () =>{ XoO(cella3, c3)})
b4.addEventListener('click', () =>{ XoO(cella4, c4)})
b5.addEventListener('click', () =>{ XoO(cella5, c5)})
b6.addEventListener('click', () =>{ XoO(cella6, c6)})
b7.addEventListener('click', () =>{ XoO(cella7, c7)})
b8.addEventListener('click', () =>{ XoO(cella8, c8)})

function XoO(cella, c){
    if (counter%2==0) {
        cella.innerHTML=`<div class="segno">X</div>`
        if(c==0){c0='X'}
        if(c==1){c1='X'}
        if(c==2){c2='X'}
        if(c==3){c3='X'}
        if(c==4){c4='X'}
        if(c==5){c5='X'}
        if(c==6){c6='X'}
        if(c==7){c7='X'}
        if(c==8){c8='X'}
    } else {
        cella.innerHTML=`<div class="segno">O</div>`
        if(c==0){c0='O'}
        if(c==1){c1='O'}
        if(c==2){c2='O'}
        if(c==3){c3='O'}
        if(c==4){c4='O'}
        if(c==5){c5='O'}
        if(c==6){c6='O'}
        if(c==7){c7='O'}
        if(c==8){c8='O'}
    }
    counter++

    // condizioni di vittoria per le X
    if (c0 == 'X' && c1 == 'X' && c2 == 'X') {
        alert('ha vinto il giocatore con le X')
    }
    if (c3 == 'X' && c4 == 'X' && c5 == 'X') {
        alert('ha vinto il giocatore con le X')
    }
    if (c6 == 'X' && c7 == 'X' && c8 == 'X') {
        alert('ha vinto il giocatore con le X')
    }
    if (c0 == 'X' && c3 == 'X' && c6 == 'X') {
        alert('ha vinto il giocatore con le X')
    }
    if (c1 == 'X' && c4 == 'X' && c7 == 'X') {
        alert('ha vinto il giocatore con le X')
    }
    if (c2 == 'X' && c5 == 'X' && c8 == 'X') {
        alert('ha vinto il giocatore con le X')
    }
    if (c0 == 'X' && c4 == 'X' && c8 == 'X') {
        alert('ha vinto il giocatore con le X')
    }
    if (c2 == 'X' && c4 == 'X' && c6 == 'X') {
        alert('ha vinto il giocatore con le X')
    }
    
    // condizioni di vittoria per le O
    if (c0 == 'O' && c1 == 'O' && c2 == 'O') {
        alert('ha vinto il giocatore con le O')
    }
    if (c3 == 'O' && c4 == 'O' && c5 == 'O') {
        alert('ha vinto il giocatore con le O')
    }
    if (c6 == 'O' && c7 == 'O' && c8 == 'O') {
        alert('ha vinto il giocatore con le O')
    }
    if (c0 == 'O' && c3 == 'O' && c6 == 'O') {
        alert('ha vinto il giocatore con le O')
    }
    if (c1 == 'O' && c4 == 'O' && c7 == 'O') {
        alert('ha vinto il giocatore con le O')
    }
    if (c2 == 'O' && c5 == 'O' && c8 == 'O') {
        alert('ha vinto il giocatore con le O')
    }
    if (c0 == 'O' && c4 == 'O' && c8 == 'O') {
        alert('ha vinto il giocatore con le O')
    }
    if (c2 == 'O' && c4 == 'O' && c6 == 'O') {
        alert('ha vinto il giocatore con le O')
    }

    // condizione di pareggio
    if (counter == 9) {
        alert('è un pareggio')
    }
}
