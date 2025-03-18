//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo'); 
    const nomeAmigo = input.value.trim(); // Obtém o valor do campo e remove espaços em branco

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido."); // Valida se o campo está vazio
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos'); 
    const itemLista = document.createElement('li'); 
    itemLista.textContent = nomeAmigo; 
    listaAmigos.appendChild(itemLista); 

    input.value = ""; // Limpa o campo de entrada para o próximo nome
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos'); 
    const amigos = listaAmigos.getElementsByTagName('li'); 

    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear."); 
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceAleatorio].textContent; 

    const resultadoDiv = document.getElementById('resultado'); // Div para exibir o resultado
    resultadoDiv.innerHTML = `<p>O seu amigo secreto é <strong>${amigoSorteado}</strong>!</p>`; // Exibe o resultado
}

//botões de adicionar e sortear
document.querySelector('.button-add').addEventListener('click', adicionarAmigo); 
document.querySelector('.button-draw').addEventListener('click', sortearAmigo); 