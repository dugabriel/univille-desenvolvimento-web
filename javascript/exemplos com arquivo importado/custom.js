console.log("Arquivo carregado com sucesso!");


/* exemplo de matriz
let resultMatriz = matriz(5, 6);
console.log(resultMatriz);
*/

function clickButton() {
    console.log("botão clicado!");
    console.log(getTextValue());
    setFieldValue("campo setado!");
}


function getTextValue() {
    return document.querySelector("#text").value;
    //return document.getElementById("text").value;    
}

function setFieldValue(text) {
    document.querySelector("#text").value = text;
}


function matriz(linhas, colunas) {
    // Cria uma matriz vazia
    let matriz = [];

    // Loop para preencher as linhas
    for (let i = 0; i < linhas; i++) {
        // Adiciona uma nova linha (que é um array)
        let linha = [];

        // Loop para preencher as colunas da linha atual
        for (let j = 0; j < colunas; j++) {
            // Adiciona um valor na coluna (pode ser qualquer valor, aqui usamos 0)
            linha.push(0);
        }

        // Adiciona a linha completa na matriz
        matriz.push(linha);
    }
    return matriz;
}