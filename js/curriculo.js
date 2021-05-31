var nome = "Jocelito Soares Fiuza";
var cargo = "Desenvolvedor Fullstack";

var nomehtml = document.getElementById ("nome-no-Html");
var cargohtml = document.getElementById("cargo-no-Html");
var texto1 = document.getElementById ("texto-1");
var texto2 = document.getElementById ("texto-2");


function colocarNomenoHtml(nome) {
nomehtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargohtml.innerHTML = cargo;   
}


function clicNoProjetos(){
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clicNoSobre(){
    console.log("clicou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomenoHtml(nome)
colocarCargoNoHtml(cargo)