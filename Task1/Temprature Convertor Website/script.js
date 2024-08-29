const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertCfButton = document.getElementById('convert-cf');
const convertFcButton = document.getElementById('convert-fc');
const resultCfElement = document.getElementById('result-cf');
const resultFcElement = document.getElementById('result-fc');

convertCfButton.addEventListener('click', () => {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    resultCfElement.textContent = ` ${celsiusValue}°C is equal to ${fahrenheitValue}°F`;
});

convertFcButton.addEventListener('click', () => {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    resultFcElement.textContent = ` ${fahrenheitValue}°F is equal to ${celsiusValue}°C`;
});