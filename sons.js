const btnDo = document.getElementById("do");
const sonDo = new Audio('notas/do.mp3');
const btnRe = document.getElementById("re");
const sonRe = new Audio('notas/re.mp3');
const btnMi = document.getElementById("mi");
const sonMi = new Audio('notas/mi.mp3');
const btnFa = document.getElementById("fa");
const sonFa = new Audio('notas/fa.mp3');
const btnSol = document.getElementById("sol");
const sonSol = new Audio('notas/sol.mp3');
const btnLa = document.getElementById("la");
const sonLa = new Audio('notas/la.mp3');
const btnSi = document.getElementById("si");
const sonSi = new Audio('notas/si.mp3');

const btnDoSus = document.getElementById("do-");
const sonDoSus = new Audio('notas/do-.mp3');
const btnReSus = document.getElementById("re-");
const sonReSus = new Audio('notas/re-.mp3');
const btnFaSus = document.getElementById("fa-");
const sonFaSus = new Audio('notas/fa-.mp3');
const btnSolSus = document.getElementById("sol-");
const sonSolSus = new Audio('notas/sol-.mp3');
const btnLaSus = document.getElementById("la-");
const sonLaSus = new Audio('notas/la-.mp3');

function teclaDo() {
    sonDo.currentTime = 0;
    sonDo.volume = 1;
    sonDo.play();
}
function teclaRe() {
    sonRe.currentTime = 0;
    sonRe.volume = 1;
    sonRe.play();
}
function teclaMi() {
    sonMi.currentTime = 0;
    sonMi.volume = 1;
    sonMi.play();
}
function teclaFa() {
    sonFa.currentTime = 0;
    sonFa.volume = 1;
    sonFa.play();
}
function teclaSol() {
    sonSol.currentTime = 0;
    sonSol.volume = 1;
    sonSol.play();
}
function teclaLa() {
    sonLa.currentTime = 0;
    sonLa.volume = 1;
    sonLa.play();
}
function teclaSi() {
    sonSi.currentTime = 0;
    sonSi.volume = 1;
    sonSi.play();
}

btnDo.addEventListener('mouseenter', teclaDo);
btnRe.addEventListener('mouseenter', teclaRe);
btnMi.addEventListener('mouseenter', teclaMi);
btnFa.addEventListener('mouseenter', teclaFa);
btnSol.addEventListener('mouseenter', teclaSol);
btnLa.addEventListener('mouseenter', teclaLa);
btnSi.addEventListener('mouseenter', teclaSi);
////////////////////////////////////////////
function teclaDoSus() {
    sonDoSus.currentTime = 0;
    sonDoSus.volume = 1;
    sonDoSus.play();
}
function teclaReSus() {
    sonReSus.currentTime = 0;
    sonReSus.volume = 1;
    sonReSus.play();
}
function teclaFaSus() {
    sonFaSus.currentTime = 0;
    sonFaSus.volume = 1;
    sonFaSus.play();
}
function teclaSolSus() {
    sonSolSus.currentTime = 0;
    sonSolSus.volume = 1;
    sonSolSus.play();
}
function teclaLaSus() {
    sonLaSus.currentTime = 0;
    sonLaSus.volume = 1;
    sonLaSus.play();
}
btnDoSus.addEventListener('mouseup', teclaDoSus)
btnReSus.addEventListener('mouseup', teclaReSus)
btnFaSus.addEventListener('mouseup', teclaFaSus)
btnSolSus.addEventListener('mouseup', teclaSolSus)
btnLaSus.addEventListener('mouseup', teclaLaSus)

document.addEventListener('keydown', function(e) {
    e = e || window.event;
    var code = e.whitch || e.keyCode;
    console.log(code);
    switch(code){
        case 90:
            teclaDo();
            break;
        case 88:
            teclaRe();
            break;
        case 67:
            teclaMi();
            break;
        case 86:
            teclaFa();
            break;
        case 66:
            teclaSol();
            break;
        case 78:
            teclaLa();
            break;
        case 77:
            teclaSi();
            break;
        case 83:
            teclaDoSus();
            break;
        case 68:
            teclaReSus();
            break;
        case 71:
            teclaFaSus();
            break;
        case 72:
            teclaSolSus();
            break;
        case 74:
            teclaLaSus();
            break;                   

    }
})

