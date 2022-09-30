let firstVar = prompt("Введіть перше число");
let firstVarInt = parseInt(firstVar);
let secondVar = prompt("Введіть друге число");
let secondVarInt = parseInt(secondVar);
let sum = firstVarInt + secondVarInt;
let dif = firstVarInt - secondVarInt;
let product = firstVarInt * secondVarInt;
let fraction = secondVarInt != 0 ? firstVarInt / secondVarInt: alert("не можна ділити на 0");

console.log (sum);
console.log (dif);
console.log (product);
console.log (fraction);
