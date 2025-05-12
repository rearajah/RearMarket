function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemperature").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  const resultElement = document.getElementById("result");

  if (isNaN(inputTemp)) {
    resultElement.textContent = "Masukkan angka suhu yang valid.";
    return;
  }

  let celsius;

  switch (inputUnit) {
    case "celsius":
      celsius = inputTemp;
      break;
    case "fahrenheit":
      celsius = (inputTemp - 32) * (5 / 9);
      break;
    case "reamur":
      celsius = inputTemp * (5 / 4);
      break;
    case "kelvin":
      celsius = inputTemp - 273.15;
      break;
  }

  let outputTemp;

  switch (outputUnit) {
    case "celsius":
      outputTemp = celsius;
      break;
    case "fahrenheit":
      outputTemp = celsius * (9 / 5) + 32;
      break;
    case "reamur":
      outputTemp = celsius * (4 / 5);
      break;
    case "kelvin":
      outputTemp = celsius + 273.15;
      break;
  }

  resultElement.textContent = `${inputTemp} ${unitLabel(inputUnit)} = ${outputTemp.toFixed(2)} ${unitLabel(outputUnit)}`;
}

function unitLabel(unit) {
  switch (unit) {
    case "celsius":
      return "°C";
    case "fahrenheit":
      return "°F";
    case "reamur":
      return "°R";
    case "kelvin":
      return "K";
    default:
      return "";
  }
}