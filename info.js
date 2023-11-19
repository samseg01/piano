const telaInfo = document.getElementById("tela-info");
const telaFundo = document.getElementById("piano");
const btnInfo = document.getElementById("btnInfo");
const btnClose = document.getElementById("close-info");

let ativo = false;

btnInfo.addEventListener('click', function(){
    if(ativo==false){
        telaInfo.style.display = "block";
        telaFundo.style.opacity = "0.4";
        ativo = true;
    }else{
        telaInfo.style.display = "none";
        telaFundo.style.opacity = "1";
        ativo = false;
    }
})

btnClose.addEventListener('click', function(){
    telaInfo.style.display = "none";
    telaFundo.style.opacity = "1";
    ativo = false;
})