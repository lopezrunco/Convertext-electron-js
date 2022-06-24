function toUppercase() {
    let textToConvert = document.getElementById('text-to-convert').value.toUpperCase()
    document.getElementById('text-to-convert').value = textToConvert
    doneAlert()
}

function toLowercase() {
    let textToConvert = document.getElementById('text-to-convert').value.toLowerCase()
    document.getElementById('text-to-convert').value = textToConvert
    doneAlert()
}

function toCapitalize() {
    let textToConvert = document.getElementById('text-to-convert').value.toLowerCase()
    const array = textToConvert.split(" ");

    // Capitalize the first letter of every word
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    const capitalizedText = array.join(" ")
    document.getElementById('text-to-convert').value = capitalizedText
    doneAlert()
}

// Capitalize after dots and special characters
function toCapitalizeAfterDot(e) {
    let textToConvert = document.getElementById('text-to-convert').value.toLowerCase()
    let result = textToConvert.replace(/([!?.]\s+)([a-z])/g, function (m, $1, $2) { // ([!?.]\s+) Group 1 capture the characters .!? and the blank spaces. ([a-z]) Group 2 captures the lowercase characters.
        return $1 + $2.toUpperCase();
    })
    let capitalized = result.charAt(0).toUpperCase() + result.slice(1)  // Capitalize the first letter of the entire text
    document.getElementById('text-to-convert').value = capitalized
    doneAlert()
}

function doneAlert() {
    let doneAlert = document.getElementById('done-alert')
    doneAlert.classList.remove('show')
    doneAlert.classList.add('show')
    setTimeout(() => {
        doneAlert.classList.remove('show')
    }, 2000)
}

function copyText() {
    let convertedText = document.getElementById('text-to-convert')
    convertedText.select() // Select the text field
    convertedText.setSelectionRange(0, 99999) // Select the text field on mobiles
    document.execCommand("copy") // The execCommand method runs a specific command (in this case "copy") on a editable section
    copiedAlert()
}

function copiedAlert() {
    let copiedAlert = document.getElementById('copied-alert')
    copiedAlert.classList.remove('show')
    copiedAlert.classList.add('show')
    setTimeout(() => {
        copiedAlert.classList.remove('show')
    }, 2000)
}