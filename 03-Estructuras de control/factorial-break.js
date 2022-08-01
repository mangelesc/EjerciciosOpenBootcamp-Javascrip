var num = 10;
let fact = 1;

while (true) {
    fact *= num;
    console.log(fact);
    num--;
    if (num === 0) {
        break;
    }
}
console.log("Factorial de 10 = " + fact);
