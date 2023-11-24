const btnDo = document.getElementById("do");
const sonDo = new Audio('do.mp3');
const btnRe = document.getElementById("re");
const sonRe = new Audio('re.mp3');
const btnMi = document.getElementById("mi");
const sonMi = new Audio('mi.mp3');
const btnFa = document.getElementById("fa");
const sonFa = new Audio('fa.mp3');
const btnSol = document.getElementById("sol");
const sonSol = new Audio('sol.mp3');
const btnLa = document.getElementById("la");
const sonLa = new Audio('la.mp3');
const btnSi = document.getElementById("si");
const sonSi = new Audio('si.mp3');

const btnDoSus = document.getElementById("do-");
const sonDoSus = new Audio('do-.mp3');
const btnReSus = document.getElementById("re-");
const sonReSus = new Audio('re-.mp3');
const btnFaSus = document.getElementById("fa-");
const sonFaSus = new Audio('fa-.mp3');
const btnSolSus = document.getElementById("sol-");
const sonSolSus = new Audio('sol-.mp3');
const btnLaSus = document.getElementById("la-");
const sonLaSus = new Audio('la-.mp3');

function teclaDo() {
    sonDo.currentTime = 0;
    sonDo.volume = 1;
    sonDo.pause();
    sonDo.play();
}
function teclaRe() {
    sonRe.currentTime = 0;
    sonRe.volume = 1;
    sonRe.pause();
    sonRe.play();
}
function teclaMi() {
    sonMi.currentTime = 0;
    sonMi.volume = 1;
    sonMi.pause();
    sonMi.play();
}
function teclaFa() {
    sonFa.currentTime = 0;
    sonFa.volume = 1;
    sonFa.pause();
    sonFa.play();
}
function teclaSol() {
    sonSol.currentTime = 0;
    sonSol.volume = 1;
    sonSol.pause();
    sonSol.play();
}
function teclaLa() {
    sonLa.currentTime = 0;
    sonLa.volume = 1;
    sonLa.pause();
    sonLa.play();
}
function teclaSi() {
    sonSi.currentTime = 0;
    sonSi.volume = 1;
    sonSi.pause();
    sonSi.play();
}

btnDo.addEventListener('mousedown', teclaDo);
btnRe.addEventListener('mousedown', teclaRe);
btnMi.addEventListener('mousedown', teclaMi)
btnFa.addEventListener('mousedown', teclaFa)
btnSol.addEventListener('mousedown', teclaSol)
btnLa.addEventListener('mousedown', teclaLa)
btnSi.addEventListener('mousedown', teclaSi)
////////////////////////////////////////////
function teclaDoSus() {
    sonDoSus.currentTime = 0;
    sonDoSus.volume = 1;
    sonDoSus.pause();
    sonDoSus.play();
}
function teclaReSus() {
    sonReSus.currentTime = 0;
    sonReSus.volume = 1;
    sonReSus.pause();
    sonReSus.play();
}
function teclaFaSus() {
    sonFaSus.currentTime = 0;
    sonFaSus.volume = 1;
    sonFaSus.pause();
    sonFaSus.play();
}
function teclaSolSus() {
    sonSolSus.currentTime = 0;
    sonSolSus.volume = 1;
    sonSolSus.pause();
    sonSolSus.play();
}
function teclaLaSus() {
    sonLaSus.currentTime = 0;
    sonLaSus.volume = 1;
    sonLaSus.pause();
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

