# IA_UTILIZADA.md

# Uso de Inteligencia Artificial en el Proyecto TechStore

## Introducción

Durante el desarrollo del proyecto **TechStore** se utilizaron herramientas de Inteligencia Artificial únicamente como apoyo para resolver dudas técnicas, comprender conceptos específicos y optimizar parte del código. En ningún caso la IA sustituyó el proceso de desarrollo, ya que todas las soluciones propuestas fueron revisadas, comprendidas, adaptadas y probadas antes de ser incorporadas al proyecto.

El uso de estas herramientas permitió mejorar la organización del código, comprender de mejor manera el funcionamiento de React, optimizar estilos CSS responsivos y resolver problemas puntuales relacionados con JavaScript, Express y MongoDB.

---

# Herramientas Utilizadas

| Herramienta | Uso |
|------------|-----|
| ChatGPT | Explicación de conceptos de React, JavaScript, Express, MongoDB, organización del proyecto, optimización de componentes y generación de documentación. |
| Gemini | Generación de ideas para la estructura del proyecto, diseño de componentes, organización de carpetas y apoyo en la creación de estilos CSS. |
| GitHub Copilot | Autocompletado de código, sugerencias de sintaxis y asistencia durante la escritura del código. |

---

# Forma de Utilización

Las herramientas de Inteligencia Artificial fueron utilizadas como asistentes durante distintas etapas del desarrollo del proyecto.

Principalmente ayudaron en:

- Comprender el funcionamiento de los Hooks de React.
- Resolver dudas sobre Props y manejo de estados.
- Mejorar el diseño responsive mediante CSS.
- Organizar correctamente los componentes del proyecto.
- Implementar el backend utilizando Express.
- Comprender la conexión entre Express y MongoDB.
- Mejorar la organización de carpetas.
- Redactar la documentación del proyecto.

Todo el código sugerido fue revisado manualmente antes de incorporarlo al proyecto.

---

# Prompts Utilizados

## Prompt 1: Manejo del carrito de compras con useState

**Prompt utilizado**

> Estoy desarrollando un carrito de compras en React utilizando useState. ¿Cómo puedo agregar un producto a un arreglo sin eliminar los productos que ya existen dentro del estado?

### Uso

Este prompt permitió comprender el uso del operador Spread (`...`) para mantener los elementos existentes dentro del arreglo del carrito.

### Modificaciones realizadas

El ejemplo entregado fue adaptado a la estructura del proyecto, utilizando los datos obtenidos desde la API de productos y adecuándolo a la función `addToCart()` implementada en el proyecto.

---

## Prompt 2: Buscador dinámico de productos

**Prompt utilizado**

> ¿Cómo puedo utilizar filter() e includes() para realizar un buscador dinámico de productos en React utilizando un input?

### Uso

Se utilizó para comprender la lógica de filtrado utilizando los métodos `filter()` e `includes()` de JavaScript.

### Modificaciones realizadas

Se adaptó el ejemplo utilizando `toLowerCase()` para evitar diferencias entre mayúsculas y minúsculas y mejorar la experiencia del usuario.

---

## Prompt 3: Diseño Responsive

**Prompt utilizado**

> Mi aplicación presenta scroll horizontal en dispositivos móviles. ¿Cómo puedo corregir el problema utilizando Flexbox y Media Queries?

### Uso

Permitió comprender cómo reorganizar correctamente los elementos utilizando:

- flex-wrap
- max-width
- width
- media queries

### Modificaciones realizadas

Las reglas CSS fueron adaptadas específicamente a los componentes Header, Navbar, Banner y ProductList para mantener la apariencia del mockup solicitado.

---

## Prompt 4: Slider para el Banner Principal

**Prompt utilizado**

> Necesito reemplazar una imagen estática por un slider automático en React que cambie de imagen cada algunos segundos y permita navegar entre diferentes promociones.

### Uso

Se utilizó como referencia para comprender la lógica de un carrusel automático utilizando Hooks de React.

### Modificaciones realizadas

La estructura fue adaptada al diseño del proyecto y posteriormente personalizada para ajustarse al estilo visual de TechStore.

---

## Prompt 5: Organización del Proyecto

**Prompt utilizado**

> ¿Cuál es la mejor estructura de carpetas para un proyecto Full Stack desarrollado con React, Express y MongoDB siguiendo buenas prácticas?

### Uso

Ayudó a organizar correctamente el proyecto separando frontend y backend.

### Modificaciones realizadas

Se adaptó la estructura sugerida incorporando carpetas específicas para componentes, estilos, controladores, modelos, rutas y configuración de MongoDB.

---

## Prompt 6: Backend con Express

**Prompt utilizado**

> Necesito crear una API REST utilizando Express para administrar productos de una tienda virtual. ¿Cuál sería una estructura profesional para organizar rutas, controladores y modelos?

### Uso

Sirvió como guía para comprender la separación de responsabilidades dentro del backend.

### Modificaciones realizadas

Las rutas fueron adaptadas al modelo Product del proyecto y reorganizadas según las necesidades de TechStore.

---

## Prompt 7: Seeder para MongoDB

**Prompt utilizado**

> Necesito insertar varios productos de prueba en MongoDB utilizando Node.js y Mongoose. ¿Cómo puedo crear un Seeder para poblar la base de datos automáticamente?

### Uso

Permitió generar un script para insertar productos de prueba de manera automática.

### Modificaciones realizadas

Los productos fueron reemplazados por productos tecnológicos correspondientes a la temática del proyecto y adaptados a la estructura del modelo Product.

---

## Prompt 8: Documentación del Proyecto

**Prompt utilizado**

> Ayúdame a redactar un informe técnico y un README profesional para un proyecto universitario desarrollado con React, Express y MongoDB.

### Uso

Se utilizó para estructurar la documentación solicitada por la asignatura.

### Modificaciones realizadas

Todo el contenido fue adaptado específicamente al proyecto TechStore, describiendo únicamente las funcionalidades realmente implementadas.

---

# Reflexión sobre el Uso de Inteligencia Artificial

Las herramientas de Inteligencia Artificial fueron utilizadas como apoyo durante el desarrollo del proyecto, permitiendo resolver dudas técnicas, comprender conceptos y mejorar la calidad del código.

En ningún momento reemplazaron el proceso de aprendizaje ni el desarrollo personal del proyecto. Cada sugerencia fue analizada, comprendida y adaptada antes de ser implementada.

El uso responsable de estas herramientas permitió optimizar el tiempo de desarrollo y fortalecer los conocimientos adquiridos durante la asignatura, manteniendo siempre el criterio propio al momento de escribir y organizar el código.

---

# Conclusión

La Inteligencia Artificial representó una herramienta de apoyo para el aprendizaje y la resolución de problemas específicos durante el desarrollo de TechStore.

Su utilización permitió mejorar la organización del proyecto, optimizar el diseño responsive, comprender conceptos avanzados de React, Express y MongoDB, además de facilitar la elaboración de la documentación técnica.

Todo el código incorporado al proyecto fue revisado, probado y modificado cuando fue necesario, asegurando la comprensión de su funcionamiento y el cumplimiento de los objetivos planteados para la asignatura.