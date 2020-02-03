const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

// DOM = Modelagem do HTML

for (let card of cards) {
  card.addEventListener("click", function(){
    modalOverlay.classList.add('active') // Adiciona uma classe
    const videoId = card.getAttribute("id")
    // Pegando o vídeo
    modalOverlay.querySelector("iframe").src=`https://www.youtube.com/embed/${videoId}` // Buscando o iframe através da variável
  }) // Função que ouve eventos e executa uma função
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector("iframe").src = "" // Removendo o vídeo do src
}) // Como não irá usar a variável, não precisa ser uma variável

