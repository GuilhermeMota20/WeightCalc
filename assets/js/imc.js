var patients = document.querySelectorAll('.patient')

for(var i = 0; i < patients.length; i++) {
    var patient = patients[i]

    var tdWeight = patient.querySelector('.weight')
    var weight = tdWeight.textContent

    var tdHeight = patient.querySelector('.height')
    height = tdHeight.textContent

    var tdIMC = patient.querySelector('.imc')

    // ============================================

    var weightValid = validateWeight(weight)
    var heightValid = validateHeight(height)

    if(!weightValid) {
        weightValid = false
        tdIMC.textContent = 'Peso inválido!'
    }

    if(!heightValid) {
        heightValid = false
        tdIMC.textContent = 'Peso inválido!'
    }

    if(weightValid && heightValid) {
        var imc = calculationIMC(weight, height)
        tdIMC.textContent = imc
    }
}

// ================================================================

// weight validation
function validateWeight(weight) {
    if (weight >= 0 && weight <= 1000) {
        return true

    } else {
        return false
    }
}

// height validation
function validateHeight(height) {
    if(height >= 0 && height <= 2.0) {
        return true

    } else {
        return false
    }
}

// calculation of imc
function calculationIMC(weight ,height) {
    var imc = 0
    imc = weight / (height * height)
    return imc.toFixed(2)
}