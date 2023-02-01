let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();


let cariani = anoAtual - 1976
res1.innerHTML = `Idade: ${cariani}`


let Julio = anoAtual - 1979
res2.innerHTML = `Idade: ${Julio}`


let muzy = anoAtual - 1979
res3.innerHTML = `Idade: ${muzy}`

let ramon = anoAtual - 1995
res4.innerHTML = `Idade: ${ramon}`


let felipe = anoAtual - 1985
res5.innerHTML = `Idade: ${felipe}`

let leo = anoAtual - 1992
res6.innerHTML = `Idade: ${leo}`

function mudatela() {
    if(window.innerWidth >= 992) {
        dino.innerHTML = "Ramon Queiroz (dino)"
    } else {
        dino.innerHTML = `Ramon Queiroz`
    }
}

mudatela()

window.addEventListener('resize', function (){
    if(window.innerWidth >= 992) {
        dino.innerHTML = "Ramon Queiroz (dino)"
    } else {
        dino.innerHTML = `Ramon Queiroz`
    }

})

