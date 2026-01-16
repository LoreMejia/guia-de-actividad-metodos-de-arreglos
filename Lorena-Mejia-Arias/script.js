// EJERCICIO 1

/*1) Metodo Inmutable y mutables*/

/* Metodos Mutables: aquel que puede cambiar su contenido original cuando se usa un metodo sobre el
Push(): Agrega uno o más elementos al final del arreglo,sirve para añadir datos nuevos a una lista existente.
Pop(): Elimina el último elemento del arreglo, sirve para quitar el último dato ingresado.
splice(): Agrega, elimina o reemplaza elementos en cualquier posición sirve para modificar el contenido interno del arreglo.

 Metodos Inmutables: no modifica un arreglo original, si no que retorna uno nuevo
 map(): Transforma cada elemento y devuelve un nuevo arreglo sirve para cuando necesitas modificar los datos sin tocar el original.
 filter(): Devuelve solo los elementos que cumplen una condición, sirve para seleccionar datos específicos.
 slice(): Extrae una parte del arreglo sin modificarlo.
 
 2) Programación Imperativa vs Declarativa

La programación imperativa: se enfoca en describir cómo debe realizarse una tarea, 
especificando paso a paso el flujo de control y las instrucciones necesarias.

La programación declarativa: se centra en expresar qué resultado se desea obtener,
dejando que el lenguaje o las funciones se encarguen del proceso interno, lo que produce un código más legible y conciso.
 

 3) Funciones Declarativas (Arrow Functions):

Las arrow functions son una sintaxis simplificada para declarar funciones en JavaScript,
 utilizando el operador =>. Permiten escribir funciones de forma más corta y clara. 
 Son preferidas al usar métodos de arreglos porque mejoran la legibilidad del código, 
 reducen la cantidad de líneas y se integran naturalmente con métodos como map, filter y find.
 
 4)Efectos Secundarios (Side Effects):

Un efecto secundario ocurre cuando un método de arreglo modifica una variable externa o el estado fuera de su propio alcance. 
Esto puede generar comportamientos inesperados,dificultar el mantenimiento del código y provocar errores, 
ya que el resultado de la función depende de factores externos.

5)Conceptos de Búsqueda:

find(): Retorna el primer elemento del arreglo que cumple con una condición específica.

findIndex(): Retorna el índice del primer elemento que cumple la condición; si no existe, retorna -1.

includes(): Verifica si un valor existe dentro del arreglo, retornando true o false.

6) Iteración vs Transformación:

forEach(): es un método de iteración, utilizado para recorrer un arreglo y ejecutar una acción sobre cada elemento, 
sin retornar un nuevo arreglo.

map(): es un método de transformación, ya que recorre el arreglo y retorna uno nuevo, 
donde cada elemento es el resultado de aplicar una función al elemento original.*/

// ==================================================== //

// Ejercicio 2

// Ejercicio 1: Gestión de Pilas (Mutable)

let herramientas = ["Martillo", "Destornillador"];

herramientas.push("Taladro");
herramientas.unshift("Sierra");
herramientas.pop();

console.log("Ejercicio 1 - Resultado:", herramientas);
console.log("Ejercicio 1 - Arreglo original modificado:", herramientas);

// Ejercicio 2: Modificación de Índice (Mutable)

let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

colores.splice(1, 0, "Naranja"); 
colores.splice(colores.indexOf("Azul"), 1, "Morado"); 

console.log("Ejercicio 2 - Resultado:", colores);
console.log("Ejercicio 2 - Arreglo original modificado:", colores);

// Ejercicio 3: Transformación Declarativa (Inmutable)
const temperaturas = [15, 20, 25, 30];

const fahrenheit = temperaturas.map(c => (c * 9 / 5) + 32);

console.log("Ejercicio 3 - Resultado:", fahrenheit);
console.log("Ejercicio 3 - Arreglo original:", temperaturas);

// Ejercicio 4: Filtrado Selectivo (Inmutable)
const inventario = [5, 12, 8, 130, 44];

const grandesValores = inventario.filter(n => n > 10);

console.log("Ejercicio 4 - Resultado:", grandesValores);
console.log("Ejercicio 4 - Arreglo original:", inventario);

// Ejercicio 5: Acumulación de Datos (Inmutable)
const ventas = [100, 250, 150, 400];

const totalVentas = ventas.reduce((acc, v) => acc + v, 0);

console.log("Ejercicio 5 - Resultado:", totalVentas);
console.log("Ejercicio 5 - Arreglo original:", ventas);

// Ejercicio 6: Ordenamiento Alfabético (Mutable)
let nombres = ["Zulma", "Andrés", "Bernardo", "Carlos"];

nombres.sort();
console.log("Ejercicio 6 - Resultado:", nombres);
console.log("Ejercicio 6 - Arreglo original modificado:", nombres);

// Ejercicio 7: Inversión de Datos (Mutable)
let orden = [1, 2, 3, 4, 5];

orden.reverse();
console.log("Ejercicio 7 - Resultado:", orden);
console.log("Ejercicio 7 - Arreglo original modificado:", orden);

// Ejercicio 8: Búsqueda de Valor (Declarativo)
const invitados = ["Juan", "Sebas", "Lore", "Sami"];
const encontrado = invitados.find(nombre => nombre === "Isaac");
console.log("Ejercicio 8 - Resultado:", encontrado);
console.log("Ejercicio 8 - Arreglo original:", invitados);

// Ejercicio 9: Localización de Índice (Declarativo)

const precios = [45, 12, 89, 34];
const indice = precios.findIndex(p => p === 89);
console.log("Ejercicio 9 - Resultado:", indice);
console.log("Ejercicio 9 - Arreglo original:", precios);

// Ejercicio 10: Comprobación de Existencia (Inmutable)

const cursos = ["Git", "React", "Node"];
const existeJS = cursos.includes("JavaScript");
console.log("Ejercicio 10 - Resultado:", existeJS);
console.log("Ejercicio 10 - Arreglo original:", cursos);

// Ejercicio 11: Validación Total (Declarativo)

const edades = [20, 25, 19, 30];
const todosMayores = edades.every(e => e >= 18);
console.log("Ejercicio 11 - Resultado:", todosMayores);
console.log("Ejercicio 11 - Arreglo original:", edades);

// Ejercicio 12: Validación Parcial (Declarativo)

const puntajes = [5, 8, 12, 3];
const algunoMayor = puntajes.some(p => p > 10);
console.log("Ejercicio 12 - Resultado:", algunoMayor);
console.log("Ejercicio 12 - Arreglo original:", puntajes);
