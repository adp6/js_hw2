let discount = 10;
let userData = prompt("Введіть кількість товарів");
let userDataInt = parseInt(userData);
let defaultPrice = 100;
let price = userDataInt > 5 ? defaultPrice - discount : defaultPrice - (discount/2);
console.log(price) 