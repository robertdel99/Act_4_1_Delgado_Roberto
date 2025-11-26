<!-- src/views/ChatsView.vue -->
<template>
  <AppLayout current="chats">
    <div class="content">
      <section class="panel">
        <div class="panel__header">
          <div>
            <h2 class="panel__title">Chats con tutores</h2>
            <p class="panel__subtitle">
              Revisa las conversaciones y envía nuevas dudas a tus tutores de cada materia.
            </p>
          </div>

          <div class="panel__meta">
            <span class="meta__pill">
              {{ chats.length }} tutores contactados
            </span>
          </div>
        </div>

        <div class="chats">
          <!-- COLUMNA IZQUIERDA: LISTA DE CHATS/TUTORES -->
          <div class="chats__list">
            <h3 class="chats__list-title">Tutores con conversación</h3>

            <ul class="chat-list">
              <li
                v-for="chat in chats"
                :key="chat.id"
                class="chat-list__item"
                :class="{ 'chat-list__item--active': chat.id === selectedChatId }"
                @click="seleccionarChat(chat.id)"
              >
                <div class="chat-list__name">
                  {{ chat.tutor }}
                </div>
                <div class="chat-list__meta">
                  {{ chat.materia }} · {{ chat.grupo }}
                </div>
                <div class="chat-list__last">
                  Último mensaje: {{ chat.ultimoMensaje }}
                </div>
              </li>
            </ul>

            <p class="panel__note">
              Esta sección representa cómo un alumno podría ver los tutores con los que ha
              tenido comunicación dentro del sistema de tutorías.
            </p>
          </div>

          <!-- COLUMNA DERECHA: PANEL DE DETALLE DEL CHAT -->
          <div class="chats__detail">
            <div v-if="selectedChat" class="detail">
              <header class="detail__header">
                <div>
                  <h3 class="detail__title">{{ selectedChat.tutor }}</h3>
                  <p class="detail__subtitle">
                    {{ selectedChat.materia }} · {{ selectedChat.grupo }}
                  </p>
                </div>
                <div class="detail__tag">
                  Alumno · Vista de chat
                </div>
              </header>

              <div class="detail__messages">
                <div class="message message--student">
                  <div class="message__sender">Tú</div>
                  <div class="message__bubble">
                    Buen día, tengo duda con el tema de {{ selectedChat.temaEjemplo }}.
                  </div>
                  <div class="message__time">Ayer · 18:32</div>
                </div>

                <div class="message message--tutor">
                  <div class="message__sender">{{ selectedChat.tutor }}</div>
                  <div class="message__bubble">
                    Claro, revisa el material de apoyo en la plataforma y si lo deseas
                    podemos verlo en la próxima tutoría agendada.
                  </div>
                  <div class="message__time">Ayer · 19:05</div>
                </div>
              </div>

              <footer class="detail__composer">
                <AppInput
                  v-model="nuevoMensaje"
                  placeholder="Escribe tu mensaje para el tutor..."
                />
                <AppButton
                  :disabled="!nuevoMensaje.trim()"
                  @click="enviarMensaje"
                >
                  Enviar mensaje
                </AppButton>
              </footer>

              <p class="detail__hint">
                Esta interfaz es solo demostrativa: no envía mensajes reales, pero muestra
                cómo un alumno podría comunicarse con su tutor desde el Dashboard.
              </p>
            </div>

            <div v-else class="detail-empty">
              <div class="detail-empty__icon">💬</div>
              <h3 class="detail-empty__title">Selecciona un tutor</h3>
              <p class="detail-empty__text">
                Elige uno de los tutores de la lista para ver un ejemplo de conversación
                desde la perspectiva del alumno.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref, computed } from "vue"
import AppLayout from "../layout/AppLayout.vue"
import AppInput from "../components/AppInput.vue"
import AppButton from "../components/AppButton.vue"

/**
 * Lista de chats de ejemplo desde el punto de vista del alumno hacia el tutor.
 * No hay funcionalidad real, solo muestra cómo se verían las conversaciones.
 */
const chats = ref([
  {
    id: "calc-juan",
    tutor: "Dra. Ana Ramírez",
    materia: "Cálculo",
    grupo: "Grupo A",
    ultimoMensaje: "Revisamos el ejercicio 3 del parcial.",
    temaEjemplo: "límites y continuidad",
  },
  {
    id: "prog-maria",
    tutor: "Ing. Juan Morales",
    materia: "Programación",
    grupo: "Grupo B",
    ultimoMensaje: "Enviaré código de ejemplo en C++.",
    temaEjemplo: "ciclos y condiciones",
  },
  {
    id: "bd-grupo",
    tutor: "Ing. Diego Ortega",
    materia: "Bases de datos",
    grupo: "Grupo C",
    ultimoMensaje: "Revisión del modelo entidad-relación.",
    temaEjemplo: "normalización de tablas",
  },
])

const selectedChatId = ref(chats.value[0]?.id || null)
const nuevoMensaje = ref("")

const selectedChat = computed(() =>
  chats.value.find((c) => c.id === selectedChatId.value) || null,
)

function seleccionarChat(id) {
  selectedChatId.value = id
  nuevoMensaje.value = ""
}

function enviarMensaje() {
  if (!nuevoMensaje.value.trim()) return
  // Solo limpiamos el campo para simular el envío.
  nuevoMensaje.value = ""
}
</script>

<style scoped>
.content {
  flex: 1;
  padding: 2rem;
  color: #000000;
}

/* PANEL PRINCIPAL */
.panel {
  background: #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 1100px;
  min-height: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.panel__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.panel__title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000000;
}

.panel__subtitle {
  font-size: 0.95rem;
  color: #000000;
}

.panel__meta {
  display: flex;
  align-items: center;
}

.meta__pill {
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  color: #000000;
}

/* LAYOUT DE CHATS */
.chats {
  display: grid;
  grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
  gap: 1.5rem;
  align-items: stretch;
  margin-top: 0.5rem;
}

/* LISTA DE CHATS */
.chats__list {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: #000000;
}

.chats__list-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #000000;
}

.chat-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.chat-list__item {
  border-radius: 8px;
  padding: 0.6rem 0.7rem;
  cursor: pointer;
  transition:
    background-color 0.12s ease,
    transform 0.08s ease,
    box-shadow 0.12s ease;
  color: #000000;
}

.chat-list__item + .chat-list__item {
  margin-top: 0.4rem;
}

.chat-list__item:hover {
  background: #e5e7eb;
  transform: translateY(-1px);
}

.chat-list__item--active {
  background: #dbeafe;
  box-shadow: 0 1px 4px rgba(37, 99, 235, 0.25);
}

.chat-list__name {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.15rem;
  color: #000000;
}

.chat-list__meta {
  font-size: 0.8rem;
  color: #000000;
}

.chat-list__last {
  font-size: 0.78rem;
  margin-top: 0.1rem;
  color: #000000;
}

/* NOTA INFORMATIVA */
.panel__note {
  font-size: 0.8rem;
  margin-top: 0.9rem;
  color: #000000;
}

/* PANEL DERECHO (DETALLE / CONVERSACIÓN) */
.chats__detail {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: stretch;
  justify-content: center;
  color: #000000;
}

.detail {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
}

/* HEADER DEL CHAT */
.detail__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.detail__title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #000000;
}

.detail__subtitle {
  font-size: 0.85rem;
  color: #000000;
}

.detail__tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: #e5e7eb;
  color: #000000;
}

/* MENSAJES */
.detail__messages {
  flex: 1;
  padding: 0.75rem 0.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.message {
  max-width: 80%;
}

.message--student {
  align-self: flex-end;
  text-align: right;
}

.message--tutor {
  align-self: flex-start;
  text-align: left;
}

.message__sender {
  font-size: 0.75rem;
  margin-bottom: 0.15rem;
  color: #000000;
}

.message__bubble {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  font-size: 0.9rem;
  background: #e5e7eb;
  color: #000000;
}

.message--student .message__bubble {
  background: #dbeafe;
}

.message__time {
  font-size: 0.7rem;
  margin-top: 0.1rem;
  color: #000000;
}

/* COMPOSER */
.detail__composer {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-bottom: 0.4rem;
}

.detail__hint {
  font-size: 0.8rem;
  color: #000000;
}

/* ESTADO VACÍO */
.detail-empty {
  max-width: 360px;
  text-align: center;
  margin: auto;
}

.detail-empty__icon {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.detail-empty__title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #000000;
}

.detail-empty__text {
  font-size: 0.9rem;
  color: #000000;
}

/* Responsive */
@media (max-width: 900px) {
  .panel {
    padding: 1.5rem;
  }

  .chats {
    grid-template-columns: 1fr;
  }

  .detail__composer {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
