// Lista de frases
const frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Não espere por oportunidades, crie-as!",
    "A persistência é o caminho do êxito.",
    "Cada dia é uma nova chance para recomeçar e fazer melhor."
];

// Seleção dos elementos do HTML
const elementoTexto = document.getElementById('texto-frase');
const botaoGerar = document.getElementById('btn-gerar');

// Função para gerar uma frase aleatória
function gerarNovaFrase() {
    // Gera um índice aleatório com base no tamanho da lista
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    
    // Atualiza o texto na página
    elementoTexto.textContent = frases[indiceAleatorio];
}

// Evento: quando clicar no botão, executa a função
botaoGerar.addEventListener('click', gerarNovaFrase);