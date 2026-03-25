//1. Leitura dos dados
//Realizar a leitura do arquivo JSON utilizando JavaScript
//Armazenar os dados em uma estrutura adequada para manipulação

const fs = require("fs");
function carregarDados(){
    try{
        const data = fs.readFileSync("dados.json", "utf8");
        return JSON.parse(data); 
    }catch (erro) {
        console.error("ERRO NA LIETURA DO ARQUIVO!", erro)
        return[];
    }
}


//2. Transformação de dados
//A partir dos dados carregados:
//Gerar uma nova lista contendo apenas os nomes dos produtos
//Gerar uma nova lista de objetos contendo apenas nome, preço e o valor
//total individual (preço * quantidade)
//Gerar uma lista contendo apenas os produtos com preço acima de 500
//Gerar uma lista contendo apenas os produtos com quantidade inferior a 5

const produtos = carregarDados();
const nomesProdutos = produtos.map(p => p.nome);

const geralProdutos = produtos.map(p => ({
    nome: p.nome,
    preco: p.preco,
    valorTotalIndividual: p.preco * p.quantidade
}));

const caros = produtos.filter(p => p.preco > 500);
const estoqueBaixo = produtos.filter(p => p.quantidade < 5);

// 3. Análise de dados
//Com base nos dados:
//Calcular o valor total em estoque considerando todos os produtos
//Calcular o valor total em estoque apenas da categoria &quot;Eletronico&quot;
//Calcular o valor total em estoque apenas dos produtos com quantidade superior a 10
//Identificar o produto com maior valor total em estoque
//Identificar o produto com menor valor total em estoque
//Identificar o produto mais caro e o mais barato
//Identificar o produto com maior e menor quantidade
//Calcular a média de preços dos produtos
//Calcular a média de valor total em estoque por produto

const valorTotalGeral = geralProdutos.reduce((acc, p) => acc + p.valorTotalIndividual)

const TotalEletronicos = produtos
    .filter(p => p.categoria === "Eletronico")
    .reduce((acc, p) => acc + (p.preco * p.quantidade),0);

const maiorValorEstoque = [...geralProdutos].sort((a, b) => b.valorTotalIndividual - a.valorTotalIndividual)[0];
const menorValorEstoque = [...geralProdutos].sort((a, b) => a.valorTotalIndividual - b.valorTotalIndividual)[0];
const maisCaro = [...produtos].sort((a, b) => b.preco - a.preco)[0];
const maisbarato =[...produtos].sort((a, b) => a.preco - b.preco)[0];
const mediaPreco = produtos.reduce((acc, p) => acc + p.preco, 0) / ()