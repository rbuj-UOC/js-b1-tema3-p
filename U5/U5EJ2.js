// T3: Primeros pasos con JavaScript en una aplicación web / Primers passos amb
//     JavaScript en una aplicació web
// U5: Almacenamiento local mediante local storage / Emmagatzemament local
//     mitjançant local storage
/**
  -- CASTELLANO
  -- EJERCICIO 3.5.2 ENUNCIADO: 
	El código dado almacena en el localStorage en el valor asociado a la clave
  "myTriangles", un texto plano en formato JSON que contiene la descripción de
  un Array con tres objetos de la clase Triangle, (vista en el ejercicio 2.5.3),
  con esta premisa se nos pide:
	- Definir en una constante denominada myTriangle el valor del primer objeto
    Triangle que se encuentra definido en este texto (obteniéndolo desde el
    localStorage).
	- Modificar el valor de la propiedad rightTriangle de este nuevo objeto
    myTriangle, de manera que ahora sea false.
	- Pasar este nuevo objeto (ya modificado) al sessionStorage en la clave
    "newTriangle".
	

  -- CATALÀ
  -- EXERCICI 3.5.2 ENUNCIAT:
	El codi donat emmagatzema al localStorage el valor associat a la clau
  "myTriangles", un text pla en format JSON que conté la descripció d'un Array
  amb tres objectes de la classe Triangle, (vista a l'exercici 2.5.3), amb
  aquesta premissa se'ns demana:
	- Definir en una constant anomenada myTriangle el valor del primer objecte
    Triangle que es troba definit en aquest text (obtenint-lo des del
    localStorage).
	- Modificar el valor de la propietat rightTriangle d'aquest nou objecte
    myTriangle, de manera que ara sigui false.
	- Passar aquest nou objecte (ja modificat) al sessionStorage a la clau
    "newTriangle".
*/

localStorage.setItem(
  'myTriangles',
  '[{"base":10,"height":5,"rightTriangle":true},{"base":10,"height":8.660254037844386,"rightTriangle":false},{"base":15,"height":7,"rightTriangle":true}]'
);

// Escribe aquí tu solución / escriviu aquí la vostra solució:
const myTriangle = JSON.parse(localStorage.getItem('myTriangles'))[0];
myTriangle.rightTriangle = false;
sessionStorage.setItem('newTriangle', JSON.stringify(myTriangle));

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, if you run this code
 * outside of this environment, please comment or remove the following lines
 */
export function tests() {
  return [myTriangle, sessionStorage.getItem('newTriangle')];
}
