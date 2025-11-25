Este proyecto es la parte donde se enfoca en convertir el diseño del Figma a código usando Vue. La idea fue recrear las pantallas principales (login, dashboard, account, chats y settings) y que todo se viera parecido a lo que se había planteado en la actividad pasada.

Qué incluye el proyecto:
El proyecto está hecho con Vue 3 y Vite. Se armaron varios componentes sencillos para no repetir código y para que las pantallas quedaran más ordenadas. Entre esos componentes están:

AppInput: para los campos de texto.
AppButton: un botón general.
AppSelect: para las listas desplegables que usan v-model.
AppCard: una tarjeta básica para separar áreas.
Todos están en la carpeta src/components.

Sobre las pantallas:
Se hicieron las vistas que venían en el diseño:
LoginView
DashboardView
AccountView
ChatsView
SettingsView

En general todas siguen la misma estructura: un sidebar a la izquierda, una barra superior y luego el contenido al centro. No tienen funcionalidad avanzada porque la actividad se enfoca más en la conversión del diseño al código.

Navegación:
La navegación se controla desde src/router/index.js.
Se agregaron las rutas correspondientes:
/login
/dashboard
/account
/chats
/settings

## Componentes usados en la interfaz

En este proyecto armé varios componentes sencillos para poder reutilizar estilos y estructura en las pantallas:

- AppButton.vue  
  Botón genérico. Recibe el contenido por el slot. Se usa como botón principal en el login y en el dashboard para el botón de “Agendar cita”.

- AppInput.vue  
  Campo de texto con etiqueta. Lo usé en el formulario de login. Recibe `label`, `type` y `modelValue` para poderlo ligar con `v-model`.

- AppSelect.vue  
  Select reutilizable para las listas de materias y grupos. Recibe `options`, `label`, `placeholder` y `modelValue`.

- AppCard.vue  
  Contenedor visual que se usa como tarjeta para agrupar información (por ejemplo, el recuadro central de dashboard, account, chats y settings).

- AppLayout.vue  
  Define la estructura general del sistema de tutorías: sidebar con el menú y la parte principal donde se cargan las vistas de Dashboard, Account, Chats y Settings mediante el router.


Todas cargan sin problema.

Sobre el diseño:
Los estilos están hechos para que se parezcan a lo visto en Figma. No se usaron frameworks externos; todo se manejó con CSS simple. La base es responsiva de forma elemental, pero la estructura ya permite continuar ajustándola si se necesita.

Cómo correr el proyecto
Después de clonar el repositorio, sólo se ocupan estos dos comandos:
// npm install
// npm run dev

http://localhost:5173

Notas finales:
El proyecto contiene los componentes, las pantallas y la estructura general que se pidió para la actividad. La navegación funciona.
Se agregó todo en github.