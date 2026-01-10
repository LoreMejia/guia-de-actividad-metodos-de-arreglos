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
