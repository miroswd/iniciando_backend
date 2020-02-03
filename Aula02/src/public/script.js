const modal = document.querySelector('.modal-cursos')
const cursos = document.querySelectorAll('.curso')


for (let curso of cursos){
  curso.addEventListener('click', function(){
    modal.classList.add('active')
    const cursoId = curso.getAttribute('id')
    console.log(cursoId)

    modal.querySelector('iframe').src=`https://rocketseat.com.br/${cursoId}`
  })
}

document.querySelector('.close-modal').addEventListener('click', function() {
  modal.classList.remove('active')
})