var modal = document.querySelector('#modal')
const btnOpenModel = document.querySelector('#open-modal')

btnOpenModel.onclick = function() {
    modal.classList.remove('invisible')
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.classList.add('invisible')
    }
}