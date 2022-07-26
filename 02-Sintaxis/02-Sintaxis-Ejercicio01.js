//02-SINTAXIS, VARIABLES Y PALABRAS RESERVADAS
//Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

//Nombre (String)
const nombre = "María Ángeles Córdoba";

//Edad (number)
let edad = 30;

//¿Eres desarrollador? (boolean)
const dev = true;

//Fecha de nacimiento (Date)
const fecnac = new Date (1991, 10, 04);

new Date()

//Libro favorito (Objeto con propiedades: título, autor, fecha, url)
const librofav = {
    titulo: "Cuento de hadas",
    autor: "Stephen King",
    fecha: 2022,
    url: "https://www.amazon.es/Cuento-hadas-%C3%89xitos-Stephen-King/dp/8401027713?ref_=Oct_d_omwf_d_1349107031&pd_rd_w=QKbiM&content-id=amzn1.sym.c2bd6a6d-9a93-42bc-b565-3dc6b4302803&pf_rd_p=c2bd6a6d-9a93-42bc-b565-3dc6b4302803&pf_rd_r=P403KY0AGB4C5Z54AXJY&pd_rd_wg=EYFUM&pd_rd_r=e9c5c2f0-bfe2-4f22-9ae6-5404b9ee532f&pd_rd_i=8401027713",
};

console.log(`Hola! Me llamo  ${nombre}, tengo ${edad} años, ¿soy desarrolladora?  
 ${dev} (si). Nací el ${fecnac}. Mi libro favorito es ${librofav.titulo}, publicado en ${librofav.fecha} por ${librofav.autor}.`);