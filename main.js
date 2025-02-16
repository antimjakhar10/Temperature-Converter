function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("temperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(inputTemp)) {
      resultDiv.innerText = "Please enter a valid temperature.";
      return;
    }

    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
      case 'C':
        celsius = inputTemp;
        fahrenheit = (inputTemp * 9 / 5) + 32;
          kelvin = inputTemp + 273.15;
          break;
        case 'F':
          celsius = (inputTemp - 32) * 5 / 9;
          fahrenheit = inputTemp;
          kelvin = celsius + 273.15;
          break;
        case 'K':
          celsius = inputTemp - 273.15;
          fahrenheit = (celsius * 9 / 5) + 32;
          kelvin = inputTemp;
          break;
        default:
          resultDiv.innerText = "Invalid unit.";
          return;
      }

      let result;
      switch (outputUnit) {
        case 'C':
          result = `${celsius.toFixed(2)} °C`;
          break;
        case 'F':
          result = `${fahrenheit.toFixed(2)} °F`;
          break;
        case 'K':
          result = `${kelvin.toFixed(2)} K`;
          break;
      }
      resultDiv.innerHTML = `Result: ${result}`;
    }

