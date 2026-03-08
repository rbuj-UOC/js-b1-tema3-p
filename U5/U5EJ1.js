// T3: Primeros pasos con JavaScript en una aplicación web / Primers passos amb
//     JavaScript en una aplicació web
// U5: Almacenamiento local mediante local storage / Emmagatzemament local
//     mitjançant local storage
/**
  -- CASTELLANO
  -- EJERCICIO 3.5.1 ENUNCIADO: 
	El código dado almacena en el localStorage en el valor asociado a la clave
  "myTriangles", un texto plano en formato JSON que contiene la descripción de
  un Array con tres objetos de la clase Triangle, (vista en el ejercicio 2.5.3),
  con esta premisa se nos pide:
	- Definir en una constante denominada myTriangles un Array de objetos Triangle
    a partir de este texto (obteniéndolo desde el localStorage).
	- Eliminar el último de los triángulos de este nuevo Array.
	- Pasar este Array (ya modificado sin el último triángulo) al localStorage
    donde se encontraba originalmente, en la clave "myTriangles".

	-- CATALÀ
	-- EXERCICI 3.5.1 ENUNCIAT:
	El codi donat emmagatzema al localStorage el valor associat a la clau
  "myTriangles", un text pla en format JSON que conté la descripció d'un Array
  amb tres objectes de la classe Triangle, (vista a l'exercici 2.5.3), amb
  aquesta premissa se'ns demana:
	- Definir en una constant anomenada myTriangles un Array d'objectes Triangle a
    partir d'aquest text (obtenint el seu valor des del localStorage).
	- Eliminar el darrer dels triangles d'aquest nou Array.
	- Passar aquest Array (ja modificat sense el darrer triangle) al localStorage
    on es trobava originalment, a la clau "myTriangles".
*/

localStorage.setItem(
  'myTriangles',
  '[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]'
);

// Escribe aquí tu solución / escriviu aquí la vostra solució:
const myTriangles = JSON.parse(localStorage.getItem('myTriangles'));
myTriangles.pop();
localStorage.setItem('myTriangles', JSON.stringify(myTriangles));

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, if you run this code
 * outside of this environment, please comment or remove the following lines
 */
export function tests() {
  return [myTriangles, localStorage.getItem('myTriangles')];
}
