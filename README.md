DOCUMENTACION COMPONENTES Y README
En este proyecto armé varios componentes para no repetir código y para que las pantallas quedaran más ordenadas. Aquí dejo explicado para qué sirve cada uno y cómo se usa.

AppLayout.vue
Este componente es básicamente el esqueleto de toda la aplicación. Aquí está el sidebar, la barra superior y el espacio donde se cargan las pantallas. Lo uso en Dashboard, Account, Chats y Settings. Recibe una prop llamada “current” que sirve solo para marcar qué opción del menú está activa. No emite eventos. Su uso es sencillo: solo se envuelve el contenido de la vista dentro del layout y ya.

AppButton.vue
Es el botón general del sistema. Lo hice para no repetir estilos en cada vista. Acepta props como “full” para que el botón ocupe todo el ancho, “variant” para cambiar entre botón principal y secundario, y “disabled” si quiero deshabilitarlo. Se usa igual que un botón normal, solo que tiene un slot para el texto. No tiene eventos propios, simplemente propaga el click normal.

AppInput.vue
Es un input reutilizable que uso en la pantalla de Login. Recibe un label, el tipo de input y el “modelValue” para que funcione con v-model. Emite el evento “update:modelValue” que es lo que permite que el valor se sincronice. La idea fue que se vea igual que en el diseño del Figma sin tener que volver a escribir toda la estructura del input.

AppSelect.vue
Select genérico para listas como materias, grupos, etc. Aquí se mandan las opciones del select y también se usa con v-model. Igual que el AppInput, este también emite “update:modelValue”. Esto me permitió no estar creando selects manuales en cada pantalla.

AppCard.vue
Es una tarjeta simple que sirve nada más para agrupar contenido. Se usa en las pantallas de Account, Chats y Settings. No tiene props ni eventos porque su única función es visual, pero ayuda bastante a mantener todo consistente.

StepIndicator.vue
Lo añadí para mostrar en qué paso va el alumno cuando agenda una cita. Solo recibe el paso actual y cuántos pasos hay en total. No tiene funcionalidad más allá de mostrar la barra o los puntos. Se usa en el Dashboard.


Relación entre ellos:
El layout envuelve todas las vistas y garantiza que el sistema tenga siempre el mismo diseño base. Los selects, inputs y botones son usados dentro de las vistas. StepIndicator se usa solo en Dashboard para marcar el avance. HistoryTable solo si se decide separarlo. El estado principal está en las vistas, no en los componentes, así que cada componente se mantiene simple, como pide la actividad. Todos los componentes están dentro de la carpeta “components” y se importan según se necesitan.

Este proyecto corresponde a la Actividad 4.1, donde el objetivo principal es transformar el diseño de la actividad anterior hecho en Figma a un sistema semi funcional usando Vue 3 de mis compañeros. La intención fue reproducir la interfaz lo más cercana posible al diseño que ya habíamos trabajado, y usar componentes reutilizables tal como se explicó en la presentación de Web Components.

Proceso general del trabajo

Lo primero que hice fue revisar la presentación de Nearpod sobre Web Components y cómo se pueden implementar en Vue. La idea central que tomé fue evitar repetir código y dividir toda la interfaz en piezas pequeñas que luego pudiera reutilizar en todas las pantallas. Con eso en mente preparé mi entorno con Vite + Vue 3 y generé la estructura inicial del proyecto como base del de mis compañeros, que realmente mostraba deficiencias en diseño y funcionalidad.

Retomé el diseño de Figma que habíamos presentado en la actividad 3.3 pero de mis compañeros y lo dividí en sus partes principales: sidebar, topbar, tarjetas, inputs, botones y paneles de contenido. Toda esa estructura la convertí en componentes separados.

Componentes que construí y para qué sirve cada uno

AppButton.vue
Es el botón general del proyecto. Quise dejarlo flexible para usarlo como botón principal y también como botón secundario con una prop variant. Esto ayuda a no repetir estilos y asegura coherencia visual en todas las vistas.

AppInput.vue
Lo usé en el Login. Tiene su etiqueta y está conectado con v-model. Evita estar escribiendo el mismo HTML en cada lugar donde necesito un input.

AppSelect.vue
Este componente lo usé para las listas desplegables del Dashboard, especialmente en la parte de seleccionar materias, grupos y horarios. Tiene props como options, label, modelValue y funciona exactamente igual que un <select> normal pero más limpio.

AppCard.vue
Es una tarjeta genérica para mostrar información dentro de un recuadro. Sirve para agrupar contenido y que visualmente se parezca al diseño de Figma.

AppLayout.vue
Este es quizá el componente más importante, porque define toda la estructura del sistema: el sidebar, la topbar y la zona donde se carga el contenido. De esta manera, las vistas de Dashboard, Account, Chats y Settings quedan mucho más limpias y solo contienen el contenido de la pantalla, no toda la estructura repetida.

Este enfoque cumple con la parte de "generar layouts implementando web components" que pidió la actividad.

Pantallas que convertí del diseño a código

Implementé cada una de las vistas del Figma:

LoginView: con inputs, el botón de acceso y el estilo general del diseño original.

DashboardView: aquí fue donde más trabajé, porque incluye el formulario por pasos, selección de tutor, fecha, horarios y el historial de citas.

AccountView: información básica del alumno presentada dentro de un panel.

ChatsView: lista de chats de ejemplo usando un estilo más visual y ordenado.

SettingsView: página de preferencias con un panel similar al resto del sistema.

En cada una traté de respetar la misma estética, el espaciado y el tipo de elementos que se mostraban en el diseño.

Sobre la navegación

Configurar la navegación fue sencillo. En src/router/index.js declaré las rutas:

/login

/dashboard

/account

/chats

/settings

Esto permite moverse entre las pantallas usando el sidebar, que a su vez marca en azul la sección donde estás.

Estilos y diseño responsivo

Toda la parte visual está hecha con CSS propio. No usé Tailwind ni otro framework, porque la actividad se centraba en saber implementar el diseño manualmente. Usé grid, flexbox, sombras, bordes y variables de color para mantener coherencia entre las pantallas.

La responsividad la hice de forma básica: el panel central se ajusta según el tamaño, y el grid del Dashboard se convierte en una columna cuando la pantalla es más pequeña.

Funcionalidad de ejemplo en Dashboard

Aunque la actividad no pedía funcionalidad real, sí implementé una lógica mínima:

Selección de materia y grupo

Carga automática de tutores disponibles

Elección de tutor, día y horario

Registro de citas

Historial de citas mostradas en una tabla

No es una funcionalidad completa, pero sirve para mostrar cómo se vería en un sistema real.

Repositorio y estructura

Código de todos los componentes

Vistas completas

Layout general

Router

Estilos

Carpeta de componentes

Carpeta de layout

Archivos necesarios para correr el proyecto

Para ejecutarlo solo es necesario:

npm install
npm run dev


El servidor se abre en localhost:5173.

Conclusión

El proyecto cumple con los puntos:

Transformación del diseño de Figma en código real usando Vue

Uso de Web Components (componentes reutilizables)

Estructura clara con un layout global

Implementación de las pantallas del sistema de tutorías

Navegación funcional entre vistas

Estilos consistentes con el diseño original

Código organizado y fácil de mantener

Subido correctamente al repositorio con la estructura limpia

Es una base sólida que podría ampliarse después, pero para esta actividad cubre todo lo que se pedía.

RUTA ROJA:
En el desarrollo convertí esa ruta en un flujo real dentro del Dashboard. Así quedó representado en código:

1. Paso 1 – Seleccionar materia y grupo

El alumno escoge primero la materia y luego el grupo.
El botón de continuar se habilita solamente cuando ambos campos están llenos.
Esto coincide con el primer bloque de la ruta roja.

2. Paso 2 – Seleccionar tutor, fecha y horario

Una vez que el alumno avanza, automáticamente se cargan los tutores correspondientes a la materia seleccionada.
También se abre un calendario y un selector de horarios.
Aquí se cumple la segunda parte del flujo rojo del diseño.

3. Paso 3 – Confirmación de la cita

Al dar clic en "Agendar cita", la información se guarda en el historial y se muestra un texto de confirmación.
Este es el final de la ruta roja, donde el Figma mostraba que el usuario debía recibir un mensaje de confirmación.

4. Historial de citas (parte final del flujo)

En el diseño se veía que después de agendar la cita el alumno debía poder consultar lo que ya había registrado.
Esto lo implementé en la tabla del historial que aparece hasta abajo del Dashboard.

src/
 ├── assets/
 ├── components/
 │     ├── AppButton.vue
 │     ├── AppInput.vue
 │     ├── AppSelect.vue
 │     ├── AppCard.vue
 │     └── StepIndicator.vue
 ├── layout/
 │     └── AppLayout.vue
 ├── views/
 │     ├── LoginView.vue
 │     ├── DashboardView.vue
 │     ├── AccountView.vue
 │     ├── ChatsView.vue
 │     └── SettingsView.vue
 └── router/
       └── index.js


¿Qué aprendí?

Con este proyecto entendí mucho mejor cómo dividir una interfaz en componentes reutilizables. También aprendí a usar props, eventos, layouts y rutas de Vue 3 de una manera más práctica, no solo teórica. Me ayudó bastante a entender cómo convertir un diseño estático de Figma en pantallas reales y cómo organizar el código para que sea fácil de mantener.

