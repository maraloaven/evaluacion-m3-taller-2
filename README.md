# Sitio Web de la Clínica Clínica

Este es un proyecto de una página web para la Clínica Clínica, diseñado con HTML, CSS (Bootstrap) y JavaScript. El sitio web presenta información básica de la clínica, incluyendo una página de bienvenida, detalles sobre el equipo médico y una sección de contacto.

## Descripción del Proyecto

El sitio web incluye tres secciones principales:

1. **Página de Bienvenida:**  
   Presenta información general sobre la clínica, los servicios disponibles y testimonios de pacientes para generar confianza en los visitantes.

2. **Equipo Médico:**  
   Muestra los detalles del personal médico, como sus especialidades, experiencia y datos de contacto. También incluye una lista interactiva que se genera dinámicamente desde un archivo JSON.

3. **Página de Contacto:**  
   Ofrece un formulario para que los usuarios envíen mensajes y un mapa interactivo que muestra la ubicación de la clínica.

## Tecnologías Utilizadas

- HTML y CSS para la estructura y el diseño básico del sitio.
- JavaScript para implementar lógica interactiva y modelos de datos.
- JSON para almacenar y gestionar la información de los doctores.

## Integración de Prompts y Validación de Datos

En el proyecto se utiliza un formulario de contacto para que los usuarios envíen sus consultas. Para garantizar la validez de los datos ingresados, se implementa una validación en el cliente. Los campos del formulario son extraídos:

1. El campo "Nombre", "Asunto" y "Mensaje" debe ser obligatorio.
2. El campo "Email" debe contener un carácter "@".

Si algún campo no cumple con estas condiciones, se genera un error que es capturado y manejado mediante un bloque `try/catch`. Si ocurre un error, se muestra un mensaje de alerta al usuario y no se envían los datos incompletos.

## Explicación del Scope de Variables y Uso de Operadores

Las variables declaradas dentro de funciones, como en el evento `submit` del formulario, tienen un alcance local y no pueden accederse fuera de esas funciones.

Se utilizan operadores lógicos como `!` e `includes()` para validar los datos ingresados. También se emplean operadores para comparar valores.

## Uso del Debugger y Manejo de Errores con Try/Catch

El bloque `try/catch` se emplea para envolver el código propenso a generar errores, como la validación de los campos del formulario. Si ocurre un error, el flujo se detiene y se captura el mensaje del error en el bloque `catch`, para mostrar un mensaje de error al usuario

## Ciclos e Iteraciones
- Crear lista de médicos: Se define un arreglo con los datos de los médicos.
- Filtrar médicos: Se seleccionan solo los médicos con más de 5 años de experiencia.
- Generar lista dinámica: Se crea una sección con tarjetas que muestran el nombre, especialidad y experiencia de cada médico.
- Agregar al contenedor principal: La sección se añade a la página.

### Estructura de los Archivos

La estructura del proyecto en general está organizada de la siguiente manera para promover la reutilización y facilitar el mantenimiento:

        /ClínicaClínica
        │
        ├── index.html                
        ├── equipo-medico.html         
        ├── contacto.html        
        ├── script.js         
        ├── doctores.json
        │
        ├── scss/
        │   ├── main.scss
        │   ├── main.css 
        │   ├── main.css.map
        │   ├── abstract
        │   │   └── _variables-mixins.scss
        │   ├── base
        │   │   └── _base.scss
        │   ├── components
        │   │   └── _navbar.scss
        │   ├── layout
        │   │   └── _header-footer.scss
        │   ├── pages
        │   │   └── _home.scss
        │   ├── themes
        │   │   └── _helpers.scss
        │   └── vendor
        │       └── __custom_bootstrap.scss
        │
        ├── img/                  
        │    ├── dr1.jpg
        │    ├── dr2.jpg
        │    ├── dr3.jpg
        │    ├── dr4.jpg 
        │    ├── logo.jpg      
        │    ├── pac1.jpg   
        │    ├── pac2.jpg    
        │    ├── pac3.jpg  
        │    ├── ser1.jpg 
        │    ├── ser2.jpg    
        │    └── ser3.jpg           
        │
        ├── .gitignore
        ├── package-lock.json
        ├── package.json
        └── README.md

## Instrucciones para Visualizar el Proyecto

### Requisitos Previos

- Tener **Node.js** y **npm** instalados en tu computadora.
- Tener **SASS** instalado globalmente. Si no lo tienes, puedes instalarlo ejecutando el siguiente comando:

        npm install -g sass

### Pasos para Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local:

        git clone <URL del repositorio>
        cd <nombre del repositorio>
2. Instala las dependencias necesarias (si es que usas alguna para el proyecto):

        npm install
3. Compila los archivos SASS en CSS ejecutando el siguiente comando:

        sass scss/main.scss:scss/main.css
4. Abre el archivo `index.html` (o cualquier otro archivo HTML del proyecto) en tu navegador:
- Utiliza Live Server (si estás trabajando en VS Code) para ver la página en tu navegador
- Haz clic derecho sobre `index.html`.
- Selecciona "Open with Live Server" para iniciar la página en tu navegador.

## Autor

- Martín Avendaño