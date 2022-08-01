var num = 10;
var fact = 1;

for (let i = 1; i < num; i++) {
    fact += fact * i;
    console.log(fact);
}
console.log("Factorial de 10 = " + fact);
