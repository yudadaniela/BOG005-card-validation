# Tarjeta de crédito válida

ndice

1. Preámbulo
2. Resumen del proyecto
3. Objetivos de aprendizaje
4. Consideraciones generales
5. Criterios de aceptación mínimos del proyecto
6. Pistas, tips y lecturas complementarias
7. Preámbulo
   El algoritmo de Luhn, también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

gráfica de algoritmo de Luhn

2. Resumen del proyecto
   En este proyecto tendrás que construir una aplicación web que le permita a un usuario validar el número de una tarjeta de crédito. Además, tendrás que implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos los últimos cuatro.

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría validar una tarjeta de crédito y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc.

Trabajando de manera individual, aprenderás a construir una aplicación web que interactuará con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript como tecnologías.

3. Objetivos de aprendizaje
   Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

HTML
Uso de HTML semántico

Links
CSS
Uso de selectores de CSS

Links
Modelo de caja (box model): borde, margen, padding

Links
Web APIs
Uso de selectores del DOM

Links
Manejo de eventos del DOM (listeners, propagación, delegación)

Links
Manipulación dinámica del DOM

Links
JavaScript
Tipos de datos primitivos

Links
Strings (cadenas de caracteres)

Links
Variables (declaración, asignación, ámbito)

Links
Uso de condicionales (if-else, switch, operador ternario, lógica booleana)

Links
Uso de bucles/ciclos (while, for, for..of)

Links
Funciones (params, args, return)

Links
Pruebas unitarias (unit tests)

Links
Módulos de ECMAScript (ES Modules)

Links
Uso de linter (ESLINT)

Uso de identificadores descriptivos (Nomenclatura y Semántica)

Control de Versiones (Git y GitHub)
Git: Instalación y configuración

Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)

GitHub: Creación de cuenta y repos, configuración de llaves SSH

GitHub: Despliegue con GitHub Pages

Links
user-centricity
Diseñar un producto o servicio poniendo a la usuaria en el centro
product-design
Crear prototipos de alta fidelidad que incluyan interacciones

Seguir los principios básicos de diseño visual

4. Consideraciones generales
   El equipo de coaches te dará un tiempo sugerido e indicaciones sobre si trabajar sola o en equipo. Recuerda que cada una aprende a diferente ritmo.
   El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
5. Criterios de aceptación mínimos del proyecto
   Usa solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].

Definición del producto
En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

Quiénes son los principales usuarios de producto.
Cuáles son los objetivos de estos usuarios en relación con tu producto.
Cómo crees que el producto que estás creando está resolviendo sus problemas.
Interfaz de usuario (UI)
La interfaz debe permitir al usuario:

Insertar el número que queremos validar.
Ver el resultado si es válido o no.
Ocultar todos los dígitos de su número de tarjeta menos los últimos 4 caracteres.
No debe poder ingresar un campo vacío.
UX (Diseño de experiencia de usuario)
Antes de iniciar a codear, debes entender el problema que quieres solucionar y cómo tu aplicación lo soluciona.

Trabaja tu primer prototipo con papel y lápiz (blanco y negro).
Luego valida esta solución con una compañera (pedir feedback).
Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un nuevo prototipo usando alguna herramienta para diseño de prototipos (Balsamiq, Figma, Google Slides, etc.) Estos puntos los presentarás en el README.md.
Scripts / Archivos
General
README.md
Debe contener lo siguiente:

Un título con el nombre de tu proyecto.
Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
La imagen final de tu proyecto.
Investigación UX:
Explicar quiénes son los usuarios y los objetivos en relación con el producto.
Explicar cómo el producto soluciona los problemas/necesidades de dichos usuarios.
Luego colocarás la foto de tu primer prototipo en papel.
Agregar un resumen del feedback recibido indicando las mejoras a realizar.
Imagen del prototipo final.
Visualmente (HTML y CSS)
Deberás maquetar de forma exacta el prototipo final que hiciste en la herramienta de diseño de prototipos que escogiste utilizando HTML y CSS. En este momento elegirás los colores, tipo de fuente, etc a usar.

A continuación describimos los archivos que utilizarás:

src/index.html
En este archivo va el contenido que se mostrará al usuario (esqueleto HTML). Encontrarás 3 etiquetas iniciales, las cuales si deseas puedes borrar y empezar de cero:

<header>: encabezado de tu proyecto.
<main>: contenido principal de tu proyecto.
<footer>: pie de página de tu proyecto.
src/style.css
Este archivo debe contener las reglas de estilo. Queremos que escribas tus propias reglas, por eso NO está permitido el uso de frameworks de CSS (Bootstrap, materialize, etc).

Funcionalmente (JavaScript - pruebas unitarias)
La lógica del proyecto debe estar implementada completamente en JavaScript.
En este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro también conocido como Vanilla JavaScript.
Vas a tener 2 archivos JavaScript separando responsabilidades, a continuación indicamos qué harás en cada archivo:

src/validator.js
Acá escribirás las funciones necesarias para que el usuario pueda verificar la tarjeta de crédito y ocultar los dígitos de su número de tarjeta. Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el objeto validator, el cual ya se encuentra exportado en el boilerplate. Este objeto (validator) contiene dos métodos (isValid y maskify):

validator.isValid(creditCardNumber): creditCardNumber es un string con el número de tarjeta que se va a verificar. Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn.

validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función debe retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud.

Ejemplo de uso

maskify('4556364607935616') === '############5616'
maskify( '64607935616') === '#######5616'
maskify( '1') === '1'
maskify( '') === ''
src/index.js
Acá escribirás todo el código que tenga que ver con la interacción del DOM (seleccionar, actualizar y manipular elementos del DOM y eventos). Es decir, en este archivo deberás invocar las funciones isValid y maskify según sea necesario para actualizar el resultado en la pantalla (UI).

test/validator.spec.js
En este archivo tendrás que completar las pruebas unitarias de las funciones validator.isValid(creditCardNumber) y validator.maskify(creditCardNumber) implementadas en validator.js utilizando Jest. Tus pruebas unitarias deben dar un 70% en coverage (cobertura), statements (sentencias), functions (funciones) y lines (líneas); y un mínimo del 50% de branches (ramas).

6. Pistas, tips y lecturas complementarias
   Primeros pasos
   Antes que nada, asegúrate de tener un 📝 editor de texto en condiciones, algo como Code.
   Para ejecutar los comandos a continuación necesitarás una 🐚 UNIX Shell, que es un programita que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar la versión completa de Cmder que incluye Git bash y si tienes Windows 10 o superior puedes usar Windows Subsystem for Linux.
   Una de las integrantes del equipo debe realizar un 🍴 fork del repo de tu cohort, tus coaches te compartirán un link a un repo y te darán acceso de lectura en ese repo. La otra integrante del equipo deber hacer un fork del repositorio de su compañera y configurar un remote hacia el mismo.
   ⬇️ Clona tu fork a tu computadora (copia local).
   📦 Instala las dependencias del proyecto con el comando npm install. Esto asume que has instalado Node.js (que incluye npm).
   Si todo ha ido bien, deberías poder ejecutar las 🚥 pruebas unitarias (unit tests) con el comando npm test.
   Para ver la interfaz de tu programa en el navegador, usa el comando npm start para arrancar el servidor web y dirígete a http://localhost:5000 en tu navegador.
   A codear se ha dicho! 🚀
   Recursos y temas relacionados
   A continuación un video de Michelle que te lleva a través del algoritmo de Luhn y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

tips credit card

Link

También una metodología para empezar a desarrollar tareas con JavaScript:

Resolución de problemas con JavaScript

Link

Terminal y shell de UNIX:

Playlist de Terminal y shell de UNIX

Link

Control de versiones y trabajo colaborativo con Git y GitHub:

Playlist de control de versiones y trabajo colaborativo

Link

Diseño de experiencia de usuario (User Experience Design):

Ideación
Prototipado (sketching)
Testeo e Iteración
Desarrollo Front-end:

Valores
Tipos
Variables
Control de flujo
Tests unitarios
Documentación de NPM
Organización del Trabajo:

Metodologías Ágiles
Scrum en menos de 2 minutos
Scrum en Detalle. No esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a poco a lo largo del -bootcamp.
Blog: cómo funciona el algoritmo de Luhn.
Únete al canal de Slack #project-card-validation
