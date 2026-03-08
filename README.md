## 🗒️ Requisitos

Para realizar este ejercicio, deberás haber realizar los ejercicios anteriores del Tema 0, en concreto:

- ¿Qué es GitHub y cómo se usa?
- ¿Qué es un sistema de control de versiones? Instalación de Git
- ¿Qué es un IDE? Instalación del IDE
- Instalación de las librerías necesarias para trabajar con JavaScript

## 📝 Enunciado

> 💡 Cada ejercicio deberás realizarlo en el fichero correspondiente, que estará ubicado en la carpeta de su unidad y con la nomenclatura **U[numero_unidad]EJ[numero_ejercicio].[tipo_fichero]**.
> Así por ejemplo el ejercicio 2 de la UNIDAD 3 que está en HTML lo tendrás localizado, aplicando esta nomenclatura, en: `U3/U3EJ2.html`.

Los ejercicios los encontrarás organizados por carpetas según los apartados de la Unidad actual. Cada ejercicio se presentará en un fichero js o html, que incluirá un comentario con el enunciado del ejercicio.

Las UNIDADES del TEMA actual (**3.Primeros pasos con JavaScript en una aplicación web**) junto con los ejercicios son los siguientes:

| UNIDAD                                         | Ejercicios                                                           |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| 1. Nociones básicas de HTML y CSS              | [QUIZ_U1](aula canvas)                                               |
| 2. Trabajo con el DOM                          | [U2EJ1](U2/U2EJ1.html) [U2EJ2](U2/U2EJ2.html) [U2EJ3](U2/U2EJ3.html) |
| 3. Eventos                                     | [U3EJ1](U3/U3EJ1.html) [U3EJ2](U3/U3EJ2.html)                        |
| 4. Formularios                                 | [U4EJ1](U4/U4EJ1.html) [U4EJ2](U4/U4EJ2.html) [U4EJ3](U4/U4EJ3.html) |
| 5. Almacenamiento local mediante local storage | [U5EJ1](U5/U5EJ1.js) [U5EJ2](U5/U5EJ2.js)                            |

Además, cada ejercicio irá acompañado de uno o varios tests para comprobar que tu solución es correcta. En la sección [Cómo ejecutar los tests](#cómo-ejecutar-los-tests) describimos cómo puedes ejecutar los tests.

Cuando hayas propuesto una implementación para la función, ejecuta los tests para ver si tu solución es correcta. Si no pasa los tests, vuelve a intentarlo revisando los errores que te comentan los tests.

Una vez termines el ejercicio, deberás enviar tus cambios para que se registren en la plataforma y que puedan ser corregidos por tu profesor. En la sección [Entregar ejercicio](#entregar-ejercicio) describimos cómo has de enviar tu solución al ejercicio.

## 🛠️ Cómo ejecutar los tests

Para lanzar los tests deberás ejecutar esta instrucción en el Terminal de tu editor (el Terminal está localizado en la parte inferior de la pantalla)

```shell
npm t
```

La instrucción anterior lanzará los tests cada vez que guardes el fichero `src/tema0.js`, que es precisamente donde implementarás los ejercicios de esta PEC.

Como puedes esperar, la primera vez que ejecutes `npm t` y se lancen los tests, si no has realizado el ejercicio, fallarán todos. Revisa el mensaje de error que se imprime para conocer su formato y entender cómo se notifican los errores.

Este es un ejemplo de una posible salida de error:

```text
 FAIL  src/tema0.test.js
  pec
    checkAge:
      × should return true when age is bigger or equal than 18
```

Es importante fijarse en la descripción del error, por ejemplo, el texto de error anterior indica que para el ejercicio (relativo a la función `checkAge`) la función debe devolver `true` si `age` es mayor o igual que 18. Esta indicación os ayuda a revisar el código para comprobar porqué el comportamiento no es el esperado.

Una vez corregido el problema, en cuanto se guarda el fichero donde estamos editando los ejercicios, el test se vuelve a lanzar y nos mostraría:

```text
 PASS  src/tema0.js
  pec
    checkAge:
      √ should return true when age is bigger or equal than 18
```

Ahora el test muestra `PASS` y el caso de prueba que antes fallaba se muestra como correcto (con el carácter `√`).

El comando de pruebas (en el Terminal) tiene un menú (accesible mediante la tecla `w`) que os permite ejecutar los tests selectivamente. Por ejemplo, pulsando `a` podéis relanzar manualmente todos los tests; y pulsando `f` podéis relanzar solamente aquellos tests que han fallado. Probad las diferentes opciones y si tenéis alguna duda, consultadla en el foro de la asignatura.

## 📦 Entregar ejercicio

Para entregar el ejercicio, sigue estos pasos. Ten en cuenta que estos pasos están indicados para VSCode, el IDE que te recomendamos en la Escuela de Programación.

1. Guarda el fichero `src/tema0.js` pulsando CTRL+s

2. Haz click en el icono de la extensión Git en la barra de menú izquierda, este es el icono:

   ![Git](imgs/git.png)

3. Haz click en el símbolo + para añadir el fichero que quieras enviar:

4. Escribe un mensaje resumiendo tus cambios (por ejemplo, "Submitting exercise") y luego haz click en _Commit_

   ![Commit](imgs/commit.png)

5. Haz click en _Sync Changes_

   ![SyncChanges](imgs/sync.png)

Tu ejercicio ya está entregado, el profesor podrá revisarlo si es necesario.
