function corFundo() {
    var cor = document.getElementById("cor").value
    document.body.style.backgroundColor = cor
}

function verEsconder() {
    document.getElementById("renata"). classList.toggle("esconder")
}

var cores = ["green", "yellow", "blue", "red"];
var indiceCorAtual = 0;

document.getElementById("mudarCorBtn").addEventListener("click", function() {
    var textoElement = document.getElementById("texto");
    textoElement.style.color = cores[indiceCorAtual];
    indiceCorAtual = (indiceCorAtual + 1) % cores.length;
});
