const app_id = '9fd73bb47a074d0c8b12d8cadfe3f680'; // Replace with your Open Exchange Rates app ID
const convertButton = document.getElementById('convert');
const resultSpan = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    fetch(`https://openexchangerates.org/api/latest.json?app_id=${app_id}`)
        .then(response => response.json())
        .then(data => {
            if (data.rates) {
                const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency];
                const convertedAmount = amount * exchangeRate;
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