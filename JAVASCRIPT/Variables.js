//..................Operadores aritmeticcos........................

/* Calcula el resultado de las expresiones:

10 + 5 * 2 y (10 + 5) * 2 y 10 + (5 * 2) -> ¿qué observas?

10 + 5 * 2 --> 20
(10 + 5) * 2 --> 30
10 + (5 * 2) --> 20
sin paréntesis, prioridad *. */

//3.14 * r **2, con r igual a 10

/* let r=10
let x=3.14 * (r**2)
console.log(x); --> 314 */



// 10 elevado a 3 y 10 elevado a -3 -> ¿qué observas?
let x = 10 ** 3
console.log(x)
//x=1000
let x = 10 ** -3
console.log(x)
//x=0.001


//Encuentra el área de un triángulo con base 6 y altura 4. ¿Cómo harías una calculadora de áreas de triángulos? 
/* let altura=4;
let base=6;
let areaTriangulo=base*altura/2;
console.log(areaTriangulo); --> 12*/
//...............................................
/* let altura=prompt("altura del triángulo");
let base=prompt("base del triángulo");
let areaTriangulo=base*altura/2;
alert("el área del triángulo es "+areaTriangulo); */


//Determina el resultado de la operación 25 / (5 - 5). Al resultado, súmale 10. ¿Cuál es el problema? <br>
//25 / (5 - 5)  --> division 0 = infinity. deja de ser numero. 

//Encuentra el perímetro de un cuadrado con un lado de longitud 8. ¿Cómo harías una calculadora para este dato a partir del lado?
/* let lado = prompt("Cuánto mide el lado?")
let perimetro=lado*4 -->32 */


//Calcula el resultado de 2 elevado a la 3 y 2 elevado a 0 y 0 elevado a 0. -> ¿Qué observas?
2 ** 3 -- > 8
2 ** 0 -- > 1
0 ** 0 -- > 1
//------------------------------


//..................Operadores de asignacion........................


//Asigna el valor 10 a una variable x y luego incrementa su valor en 3. ¿Cómo haces esto de dos formas distintas pero equivalentes?
/* let x=10;
let opcionA=x*3;
console.log(opcionA);
let y=3;
let opcionB=x*=y;
console.log(opcionB) */

//Declara una variable total con el valor 50 y calcula:
/* Restar 10
Sumar 21 %
Añadir 20 más el 10% de 20
¿Cuál es el total final?

let x=50
x=x-10
console.log(x) -->40
x=x+(21*x/100) 
console.log(x) -->48.4
x=x+20+(20*10/100)
console.log(x)-->70.4 */

//Inicializa una variable contador en 5 y luego multiplícala por 2 cinco veces. ¿Qué obtienes? ¿A qué operación equivale?

/* let contador = 5
contador = 5*5*5 --> 125 
igual que: let contador=5**3 */

//Asigna el valor 15 a una variable y y luego divídela por 3, 5, 7, 10. ¿Cómo sabes en qué casos la división es  exacta? 
/* let x=15
console.log(x/3) -->5
console.log(x/5) --> 3
console.log(x/7) -->2.143
console.log(x/10) -->1.5
Para saber si es exacto se puede mirar con %:
x=x%3 --> 0 entero
x=x%5 --> 0 entero
x=x%7 --> 1 decimal
x=x%10 --> 5 decimal */


//Declara una variable saldo con el valor 100 y calcula:
/* Quitar 10 %
Restar 15
Añadir 12.5 %
Dividir por 2
Añadir 21 %
¿Qué obtienes?
let x=100
x=x-(x*10/100)
console.log (x) -->90
x=x-15
console.log (x) -->75
x=x+(x*12.5/100)
console.log (x) -->84.375
x=x/2
console.log (x) -->42.1875
x=x+(x*21/100)
console.log (x) -->51.04687 */


//--------------------------------------------------------Operadores de comparación--------------------------------

/* Comprueba:
7 > 3 --> true
3 < 7 --> true
1 == '1' --> true compara contenido
1 === '1' --> false, compara srting y numero 
3 != '3' --> false, si son igual
3 !== 3.0 --> false, si son igual 
Añade una explicación del resultado de cada comparación.
 */

/* Haz una comparación con la variable edad de un usuario de tipo Number y entero:  let edad=25

Es mayor de 18: edad>18 --> true
Es menor que 18: edad<18 --> false
Está entre 25 y 35 años: (edad>=25 && edad<=35) --> true
No es mayor de 65 años: edad<65 --> true
Tiene entre 13 y 24 años cumplidos: (edad>=13 && edad<=24) --> false
 */

//Determina si es el caso que una variable numérica entre 5 y 10 cumple:
/* let x=7
Es número positivo: x>=0 --> true
Tiene hasta 2 dígitos: x<=99 --> true
Es número par x/2=3.5 --> no
Es número impar x/2=3.5 --> si
Es divisible por 3: x/3=2.33 / x%3=1--> no */

//Comprueba si el string Hola, ¿qué tal?:
/* Tiene más de 10 caracteres: 
"Hola, ¿qué tal?".length> 10 --> 15


Empieza por H
let arr = "Hola, ¿qué tal?"
arr[0] --> 'H'´
Tiene más de 5 caracteres
let arr[7] --> q

Tiene algún espacio
let texto="Hola, ¿qué tal?"
if (texto.includes(" ")){
    console.log("Tiene espacio en blanco");
} else {
    console.log("No tiene espacio")
}
 */

/* No es nulo o undefined
let str = "Hola, ¿qué tal?"
str !=undefined --> true
str !=null --> true
Si como está definidio el String, te dice verdad que no es = a null o undefined. Si declaras la variable str sin asignarle nada te dara false a la negacion:
let str
str != undefined
false */


Realiza las comparaciones necesarias para verificar si un día(String) es:

const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const diaDeLaSemana = diasDeLaSemana[new Date().getDay()];
// Cadena:
"Hoy es " + diaDeLaSemana
console.log(diaDeLaSemana)

Día laboral


if (diaDeLaSemana == "Lunes" ||diaDeLaSemana == "Martes" || diaDeLaSemana == "Miércoles" || diaDeLaSemana == "Jueves" || diaDeLaSemana == "Viernes"){
    console.log("Es día laboral");
} else {
    console.log("No es laboral")
}

Fin de semana
if (diaDeLaSemana == "Lunes" ||diaDeLaSemana == "Martes" || diaDeLaSemana == "Miércoles" || diaDeLaSemana == "Jueves" || diaDeLaSemana == "Viernes"){
    console.log("Es entre semana");
} else {
    console.log("Es finde")
}


Lunes o Jueves

Viernes

No lectivo(los martes)









