"use strict";
var empresa;
(function (empresa) {
    const calc = document.getElementById("calc");
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    calc.addEventListener("click", () => {
        let p = new empresa.Cliente(90);
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        p.saldo = 100;
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("codigo").textContent = p.codigo.toString();
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
})(empresa || (empresa = {}));
