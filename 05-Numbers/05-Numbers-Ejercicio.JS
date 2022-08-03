//Crea un archivo JS que contenga las siguientes líneas
//Una variable que contenga tu altura en centímetros (entero)

let alturacm = 166;
console.log(alturacm);

//Una variable que contenga tu altura en metros (número de coma flotante)
let alturam = 1.66;
console.log(alturam);

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesokg = 65.3;
console.log(pesokg);

//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRound = Math.ceil(alturam);
console.log(alturaRound);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesokgRound = Math.floor(pesokg);
console.log(pesokgRound);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que
//se puede obtener en Javascript
let valormx = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(valormx);
