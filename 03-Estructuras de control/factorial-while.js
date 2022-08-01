var num = 10;
let fact = 1;

while (num > 1) {
    fact *= num;
    console.log(fact);
    num--;
}
console.log("Factorial de 10 =" + fact);
