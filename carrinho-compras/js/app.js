function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    
    alert(nomeProduto);
    alert(quantidade.value);

    let preco = quantidade.value * valorUnitario;
    alert(preco);
}