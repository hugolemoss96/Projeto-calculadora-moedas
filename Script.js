const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector("#currency-select")


function convertValues() {
    const inputValue = document.querySelector("#input-value").value

    const valueConvert = document.querySelector("#value-real")
    const valueConverted = document.querySelector("#value-converted")
    
    const dolarToday = 5.20
    const euroToday = 6.20


    if (currencySelect.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue / euroToday)
    }

    valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)

}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyIcon = document.querySelector("#currency-icon")
    
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyIcon.src = "./Assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyIcon.src = "./Assets/euro.png"
    }

    convertValues()
}



currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)