/* Abrindo o modal */
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card') // Pegando uma coleção de valores iguais

// Para um dos card de cards
for(let card of cards){
  card.addEventListener("click", function(){  
    /* Mudando o conteúdo */
    const videoId = card.getAttribute("id")
    window.location.href = `/video?id=${videoId}` // Redirecionamento
    console.log(videoId)
  }) // Função que ouve eventos
}
