var tablePatient = document.getElementById('table-patient')

tablePatient.addEventListener('click', function(event) {

    var target = event.target

    if(target.classList.contains('icon-trash')) {
        target.closest('tr').remove()
    }
})

