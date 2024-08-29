document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const resultDisplay = document.getElementById('result');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultDisplay.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    // Conversion logic
    if (selectedUnit === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    }

    resultDisplay.textContent = `${temperature}° ${selectedUnit} is ${convertedTemperature.toFixed(2)}° ${convertedUnit}`;
});
