function somar(){
    let numero1 = Number(document.getElementById('n1').value)
    let numero2 = Number(document.querySelector('#n2').value)
    let resposta = document.querySelector("#resposta")
    let soma = (numero1 + numero2)

    resposta.innerHTML = soma
}

function alterarimagem(){
    let imagem = document.getElementById("imagem")
    imagem.setAttribute("src", "https://rollingstone.com.br/wp-content/uploads/aaron-paul-breaking-bad_reproducao.jpg")
}
    // console.log(numero1 + numero2)
    // alert (numero1 + numero2)
