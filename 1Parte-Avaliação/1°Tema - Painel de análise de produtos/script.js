//Requisitos de dados
//Os produtos devem ser armazenados em um vetor (array) no JavaScript.
//Cada produto deve possuir:
//nome
//preço
//quantidade

let produtos = [];
function adicionarProdutos(){
    const nome = document.getElementById("nome").value
    const preco = parseFloat(document.getElementById("preco").value)
    const quantidade = parseFloat(document.getElementById("quantidade").value)

    if (nome && !isNaN(preco) && !isNaN(quantidade)){
        const novoProduto = {nome, preco, quantidade};
        produtos.push(novoProduto)

        document.getElementById("nome").value = "";
        document.getElementById("preco").value = "";
        document.getElementById("quantidade").value = "";

        atualizarPainel();
    }

    else{
        alert("ALERTA! PREENCHA TODOS OS CARTÕES CORRETAMENTE!")
    }
}

//Funcionalidades obrigatórias
//1. Cadastro dinâmico
//Criar inputs para:
//nome do produto
//preço
//quantidade
//Um botão &quot;Adicionar produto&quot;
//Ao clicar, o produto deve ser inserido no vetor

//2. Atualização automática do painel
//Sempre que um produto for adicionado, o sistema deve:
//Atualizar o produto mais caro
//Atualizar o produto com maior quantidade
//Atualizar o valor total em estoquefunction

atualizarPainel(){
    if (produtos.length === 0)return;

    let maisCaro = produtos[0];
    let maiorQuantidade = produtos[0];
    let valorTotal = 0;

    produtos.forEach(p => {
        if (p.preco > maisCaro.preco){
            maisCaro = p;
        }

        if (p.quantidade > maiorQuantidade.quantidade){
            maiorQuantidade = p;
        }
        valorTotal += (p.preco * p.quantidade);
    });

document.getElementById("card-caro").innerText = maisCaro.nome
document.getElementById("card-quantidade").innerText = maiorQuantidade.nome
document.getElementById("card-total").innerText = valorTotal
}
