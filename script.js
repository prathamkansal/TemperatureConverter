function convertTemperature() {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('result');

    let temperature = parseFloat(input);

    if (isNaN(temperature)) {
        resultDisplay.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemperature;
    let outputUnit;

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        outputUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        outputUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        // Celsius to Kelvin
        convertedTemperature = temperature - 273.15;
        outputUnit = 'Celsius';
    }

    resultDisplay.textContent = `${convertedTemperature.toFixed(2)}° ${outputUnit}`;
}
