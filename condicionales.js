// COMPARACIONES   
// OPERADOR    DESCRIPCIÓN
// ==          Igual a ... 
// !=          Diferente a ... 
// >           Mayor a ...
// <           Menor a ... 
// >=          Mayor o igual a ... 
// <=          Menor o igual a ... 
// ===         Igual a ... y mismo tipo de dato 
// -----------------------------------------------------------------
// CONCATENAR COMPARCIONES (mediante operaciones logicos) 
// OPERADOR    DESCRIPCIÓN 
// &&          AND: devuelve un TRUE si se cumplen todas las condiciones 
// ||          OR: Devuelve un TRUE si si cumple ALGUNA de las condiciones 
// !           NOT: Inverte el valor booleano

// SI COMPARAMOS VALORES ó CONTENIDOS DE VARIABLES, EL RESULTADO QUE DEVUELVE
// ES UN VALOR BOOLEANo (true/false)

// Ejemplos:
console.log(5 == 5); // true
console.log(5 === 5); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != 6); // true 
console.log(5 > 5); // false
console.log(5 < 7); // true
console.log(5 >= 5); // true

// Ejemplo de concatenaciones
// comparar si el email y el pass son correctos
// SIMULAMOS BASE DE DATOS
// var emailDB = "armand@gmail.com";
// var passDB = "123456";
// // SIMULAMOS UN LOGIN
// var emailUSER = prompt("dime tu email");
// var passUSER = prompt("dime tu password");

// console.log(emailDB === emailUSER && passDB === passUSER);

// IF-ELSE
// sintaxis 
// if (condition) {
//     si se cumple, realiza estas instrucciones
// } else {
//     si NO se cumple, realiza estas instrucciones
// }

// Ejemplo: comprobar una contraseña
// var contraDB = "1234";
// var contraUSER = "12345";

// if (contraDB === contraUSER) {
//     alert("contraseña OK");
// } else {
//     alert("contraseña KO");
// }


// Ejemplo: comprobar el mayor de dos numeros    
var n1 = 1;
var n2 = 1;

if(n1 > n2){
    console.log("n1 es mayor que n2");
}else if(n2 > n1){
    console.log("n2 es mayor que n1");
}else{
    console.log("los numeros son iguales");
}

// SWITCH
// sintaxis:
// switch (valor) {
//     case value:
//         ejecuta estas instrucciones
//         break;
//     .
//     . 
//     .
//     default:
//         break;
// }

// SIEMPRE SE UTILIZA UN SWITCH CUANDO SABEMOS LOS VALORES A COMPARAR
// Ejemplo: semáforo
var color = "rojo";

switch (color) {
    case 'rojo':
        console.log("No pasar!!!!");
        break; // sale del switch
    case 'ambar':
        console.log("Precaución!!!!");
        break; // sale del switch
    case 'verde':
        console.log("Pasar!!!!");
        break; // sale del switch
    default:
        console.log("No has puesto un color correcto!!!!");
        break;
}








