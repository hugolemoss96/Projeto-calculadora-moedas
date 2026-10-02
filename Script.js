const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector("#currency-select")


function convertValues() {
    const inputValue = document.querySelector("#input-value").value

    const valueConvert = document.querySelector("#value-real")
    const valueConverted = document.querySelector("#value-converted")
    
    const dolarToday = 5.23
    const euroToday = 5.88
    const libraToday = 6.92
    const bitcoinToday = 134.000


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

    if (currencySelect.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValue / bitcoinToday)
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
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyIcon.src = "./Assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyIcon.src = "./Assets/bitcoin.png"
    }
    
    convertValues()
}



currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)