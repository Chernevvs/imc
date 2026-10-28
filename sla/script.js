let nome = prompt("Oioi, escreva o seu nome")
let peso = parseFloat(prompt("Qual o seu peso?(kg)"))
let altura = parseFloat(prompt("qual a sua altura?(M)"))
gerarrelatorio(peso, altura)

function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function classificarIMC(imc){
    if (imc >=40){
        alert("obesidade grau 3: " + imc)
    } else if (imc >=35){
        alert("obesidade grau 2:" + imc)
    } else if (imc >=30){
        alert("obesidade grau 1" + imc)
    } else if (imc >= 25){
        alert ("excesso de peso" + imc)
    } else if (imc >=18.5){
        alert("peso normal" + imc)
    } else if (imc <=18.5){
        alert("abaixo do peso" + imc)
    }
}

function gerarrelatorio(peso, altura){
    let imc = calcularIMC(peso, altura)
    classificarIMC(imc)
}
