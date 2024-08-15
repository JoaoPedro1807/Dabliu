//item 7.10.0
function validarNumero() {

    //item 7.10.1
    let numero = document.getElementById("numero").value;

    //item 7.10.2
    let mensagem = document.getElementById("mensagem").value

    //item 7.10.3
    if (numero === "") {

        //item 7.10.4
        mensagem.textContent = "Por favor, insira um numero"

        //item 7.10.5
        mensagem.style.color = "red";

    }
    //item 7.10.6
    else {

        //item 7.10.7
        numero = parseInt(numero);

        //item 7.10.8
        if (numero > 10) {

            //item 7.10.9
            mensagem.textContent = "O numero e maior que 10";

            //item 7.10.10
            mensagem.style.color = "green";

            //item 7.10.11
        } else

            //item 7.10.12
            if (numero > 5) {

                //item 7.10.13
                mensagem.textContent = "O numero e maior que 5, mas menor ou igual a 10";

                //item 7.10.14
                mensagem.style.color = "orange";

                //item 7.10.15
            } else {

                //item 7.10.16
                mensagem.textContent = "O numero e 5 ou menor";

                //item 7.10.17
                mensagem.style.color = "blue";

                //item 7.10.18
            }

        //item 7.10.19
    }

    //item 7.10.20
}