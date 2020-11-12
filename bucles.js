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

// Un ejemplo para imprimir los números del 1 al 10
// console.log(1);
// console.log(2);
// console.log(3);
// . 
// . 
// .
// console.log(10);
// PARA NO REPETIR LAS INSTRUCCIONES, UTILIZAMOS LOS LOOPS o BUCLES

// while:
// sintaxis: 
// while (condition) {
//     mientras se cumpla la condicion...ejecuta la instruccion
// }

// Ejemplo: Imprimir los numeros del 1 al 10
var i = 1; // INICIALIZACIÓN de la variable contadora "i"
while (i <= 10) {  // COMPARACIÓN de la variable contadora "i"
    console.log(i);
    i++; // ACTUALIZACIÓN de la variable contadora "i"
}

// do-while
// sintaxis:
// do {
    
// } while (condition);

// La diferencia con el WHILE, es que el DO-WHILE, ejecuta y luego pregunta,
// y el WHILE lo contrario

// Ejemplo: pide la contraseña al usuario mientras no coincidan
// var passDB = "1234";

// do {
//     var passUSER = prompt("Dime tu contraseña");
// } while (passUSER != passDB);

// FOR: Diseñado para recorrer ARRAYS
// sintaxis:
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// Ejemplo: Imprimir los numeros del 1 al 10
for(let i=1 ; i<= 10 ; i++){
    console.log(i);
}

// Ejemplo: recorrer un array con lenguajes de programación
// y comprobar que existe el lenguaje "JAVA"
var lenguajes_prog = ["JS", "Python", "JAVA", "PHP", "C++", "R"];

for (let i=0; i < lenguajes_prog.length; i++){
    
    if (lenguajes_prog[i] === "JAVA"){
        alert("Esta JAVA en el array!!!")
    }
    // console.log(lenguajes_prog[i]);
}






