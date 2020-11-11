// VARIABLES
/*
Def: celdas de memoria dentro del lenguaje que
nos permiten almacenar tipos de datos
*/

// TIPOS DE VARIABLES
// 1-numericas
var numero1 = 5; 
var numero2 = 6;
var numero3 = 2.5;
var numero4 = -10;

// 2-Texto ó "String"
var saludo = "Hola";
var despedida = 'Adios';

// 3-Boolean
var verdadero = true;
var falso = false;

// 4-Array (matriz): podemos almacenar varios datos en 
// una misma variable

// var leng_prog_1 = "JS";
// var leng_prog_2 = "Python";
// var leng_prog_3 = "JAVA";
// . 
// .
// .
var leng_prog = ["JS","Python","JAVA","PHP","C++","R"]; 
// podemos seleccionar un dato del array mediante su
// posicion numérica (empezando por 0)
var python = leng_prog[1];
// podemos obtener la cantidad de datos del array (longitug) 
// mediante la propiedad "length"
var cant_element = leng_prog.length;

// OPERAR CON VARIABLES
// + : SUMA 
// - : RESTA 
// / : DIVISIÓN 
// * : MULTIPLICACIÓN 
// % : RESTO ó MODULO DE UNA DIVISION 
// ++ : INCREMENTO EN UNA UNIDAD 
// -- : DECREMENTO EN UNA UNIDAD 

// Ejemplos
var n1 = 10;
var n2 = 5;

var suma = n1 + n2;
var resta = n1 - n2;
var mult = n1 * n2;
var div = n1 / n2;
var resto = n1 % n2;

// FUNCIONES DE SALIDA Y ENTRADA EN JS
// ENTRADA : prompt(): popup que permite introducir datos
// var nombre = prompt("Dime tu nombre");

// SALIDA : alert() : popup que imprime datos
// alert("Hola");
// alert(suma);

console.log("hola");
console.log(suma);
console.log(resta);
console.log(mult);
console.log(div);
console.log(resto);

// CONCATENAR: Se utiliza para imprimir un texto junto a un contenido 
// de una variable
console.log("La suma de n1 y n2 es: " + suma);
















