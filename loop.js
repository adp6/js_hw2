let A = prompt ("Введіть перше число");
let aInt = parseInt(A);
let B = prompt ("Введіть друге число");
let bInt = parseInt(B);
let sum = 0;
while (A<B) {
    A++;
    if (A<B) {
        sum += A;
    }
    console.log(sum);
}