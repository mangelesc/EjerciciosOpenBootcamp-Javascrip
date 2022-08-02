//Crea un archivo JS que contenga las siguientes líneas

//Una cadena de texto con tu Nombre
let nombre = "Ángeles";
console.log(nombre);

//Otra cadena de texto con tu Apellido
let apellido = "Córdoba";
console.log(apellido);

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let letrasEstudiante = estudiante.length;
console.log(letrasEstudiante);

//Una variable que contenga la primera letra del Nombre
let firstNombre = nombre[0];
console.log(firstNombre);

//Otra variable que contenga la última letra del Apellido
let lastApellido = apellido[apellido.length - 1];
console.log(lastApellido);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let noespacios = estudiante.replace(" ", "");
console.log(noespacios);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let boolNombre = estudiante.includes(nombre);
console.log(boolNombre);
