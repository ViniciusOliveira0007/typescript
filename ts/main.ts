namespace empresa{
    const calc= document.getElementById("calc") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;

    const campoCodigo = document.getElementById("campoCodigo") as HTMLInputElement;

    const btnDeposito = document.getElementById("deposito") as HTMLButtonElement;

    const campoDeposito = document.getElementById("campoDeposito") as HTMLInputElement;

    let p: Cliente;

    const campoCompra = document.getElementById("campoCompra") as HTMLButtonElement;
    const btnComprar = document.getElementById("comprar") as HTMLButtonElement;

    

    calc.addEventListener("click", ()=>{
    let p = new Cliente(parseInt(campoCodigo.value));
    p.nome = campoNome.value;
    p.anoNasc = parseInt(campoAno.value);
    
    //p.saldo = 100;


    document.getElementById("nome").textContent =p.nome;
    document.getElementById("ano").textContent =p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
    document.getElementById("codigo").textContent = p.codigo.toString();
    document.getElementById("saldo").textContent = p.saldo.toString();


    });

    btnDeposito.addEventListener("click", ()=>{
        p.deposita(parseFloat(campoDeposito.value));
        document.getElementById("saldo").textContent = p.saldo.toString();
    });

    btnComprar.addEventListener("click", ()=>{
        if(p.comprar(parseFloat(campoCompra.value))){
            alert("Obrigado pela compra");
        }else{
            alert("saldo insuficiente faça um depósito");
        }

        document.getElementById("saldo").textContent = p.saldo.toString();

    });


   }