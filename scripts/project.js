let app_id = '9fd73bb47a074d0c8b12d8cadfe3f680'; // Replace with your Open Exchange Rates app ID
let convertButton = document.getElementById('convert');
let resultSpan = document.getElementById('result');

convertButton.addEventListener('click', () => {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    fetch(`https://openexchangerates.org/api/latest.json?app_id=${app_id}`)
        .then(response => response.json())
        .then(data => {
            if (data.rates) {
                let exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
                let convertedAmount = amount * exchangeRate;
                resultSpan.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                resultSpan.textContent = 'Conversion failed. Please check your inputs.';
            }
        })
        .catch(error => {
            console.error(error);
            resultSpan.textContent = 'An error occurred while fetching data.';
        });
});