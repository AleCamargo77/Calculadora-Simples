    function calcular() {
        let n1 = document.getElementById("n1").value;
        let n2 = document.getElementById("n2").value;

        if (n1 == "" || n2 == "") {
            return alert("Preencha os campos obrigatórios");
        }

        n1 = converterNumero(n1);
        n2 = converterNumero(n2);
        const selector = document.getElementById("selector").value;


        switch (selector) {
            case '+':
                calculo = (n1 + n2)
                document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
                break

            case '-':
                calculo = (n1 - n2)
                document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`
                break

            case '/':
                calculo = (n1 / n2)
                document.getElementById("resultado").innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${calculo}`
                break

            case 'X':
                calculo = (n1 * n2)
                document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} * ${n2} é = ${calculo}`
                break
        }
    }

    function converterNumero(numero) {
        return parseFloat(numero);
    }

    function clearData() {
        n1.value = "";
        n2.value = "";
    }
