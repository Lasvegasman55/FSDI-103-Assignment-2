// Prompt the user for a temperature in Celsius
let celsius = prompt("Enter the temperature in Celsius:");

// Convert the temperature to Fahrenheit
const fahrenheit = (celsius * 9/5) + 32;

// Display the result
document.getElementById('output').innerHTML = `${celsius}°C is equal to ${fahrenheit}°F`;

// Log the result to the console
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
