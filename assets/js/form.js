var addPatient = document.querySelector('#addPatient')

addPatient.addEventListener('click', function() {

    event.preventDefault()

    var form = document.querySelector('#form')

    var patient = getFormPatient(form)

    var errors = validatePatient(patient)
    if(errors.length > 0) {
        displayErrorMessage(errors)
        return
    }

    addPatientInTable(patient)
    form.reset()

    var messageError = document.querySelector('.list-errors')
    messageError.innerHTML = ''

})

// ==================================================

function addPatientInTable(patient) {
    var patientTR = assembleStructureHtml(patient)

    var table = document.querySelector('#table-patient')
    table.appendChild(patientTR)

    // close modal
    var modal = document.querySelector('#modal')
    modal.classList.add('invisible')
}


function getFormPatient(form) {

    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        imc: calculationIMC(form.weight.value, form.height.value),
        remove: form.remove.value
    }

    return patient
}

function assembleStructureHtml(patient) {

    var patientTR = document.createElement('tr')
    patientTR.classList.add('patient')

    patientTR.appendChild(createTD(patient.name, 'name'))
    patientTR.appendChild(createTD(patient.weight, 'weight'))
    patientTR.appendChild(createTD(patient.height, 'height'))
    patientTR.appendChild(createTD(patient.imc, 'imc'))

    // criando imagem de remoção
    var iconRemove = document.createElement('i')
    iconRemove.classList.add('icon-trash')

    // criando td para a imagem de remoção
    var removeTD = document.createElement('td')
    removeTD.classList.add('remove')

    removeTD.appendChild(iconRemove)
    patientTR.appendChild(removeTD)
    

    return patientTR

}

function createTD(data, classe) {

    var td = document.createElement('td')
    td.textContent = data
    td.classList.add(classe)

    return td

}

function validatePatient(patient) {
    var errors = []

    // validate name
    if(patient.name.length == 0) {
        errors.push('O nome não pode ser em branco!')
    }

    // Validate weight
    if(!validateWeight(patient.weight)) {
        errors.push('Peso é inválido!')
    }

    if(patient.weight == 0) {
        errors.push('O peso não pode ser em branco!')
    }

    // Validate height
    if(!validateHeight(patient.height)) {
        errors.push('Altura é inválida!')
    }

    if(patient.height == 0) {
        errors.push('A altura não pode ser em branco!')
    }

    return errors
}

function displayErrorMessage(errors) {
    var listErrors = document.querySelector('.list-errors')

    listErrors.innerHTML = ''

    errors.forEach(function(error) {

        var itemError = document.createElement('li')
        itemError.textContent = error

        listErrors.appendChild(itemError)

    }) 
}