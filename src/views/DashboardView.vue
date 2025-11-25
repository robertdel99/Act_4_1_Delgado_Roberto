<!-- src/views/DashboardView.vue -->
<template>
  <div class="dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar__logo">🏫</div>
      <nav class="sidebar__nav">
        <a href="#" class="sidebar__link sidebar__link--active">Dashboard</a>
        <a href="#" class="sidebar__link">Account</a>
        <a href="#" class="sidebar__link">Chats</a>
        <a href="#" class="sidebar__link">Settings</a>
      </nav>
    </aside>

    <!-- Zona principal -->
    <div class="main">
      <!-- Topbar -->
      <header class="topbar">
        <div class="topbar__title">Dashboard</div>
        <div class="topbar__user">Bienvenido User Name</div>
      </header>

      <!-- Contenido -->
      <main class="content">
        <section class="panel">
          <h2 class="panel__title">Sistema de tutorías</h2>
          <p class="panel__subtitle">Selecciona una materia para agendar tu cita.</p>

          <div class="panel__form">
            <label class="panel__label">Selecciona una materia:</label>
            <AppSelect
              :options="materias"
              v-model="materiaSeleccionada"
            />

            <p class="panel__info" v-if="materiaSeleccionada">
              Seleccionaste: <strong>{{ materiaSeleccionada }}</strong>
            </p>

            <label class="panel__label">Selecciona un grupo:</label>
            <AppSelect
              :options="grupos"
              v-model="grupoSeleccionado"
            />

            <p class="panel__info" v-if="grupoSeleccionado">
              Grupo seleccionado: <strong>{{ grupoSeleccionado }}</strong>
            </p>

            <button class="panel__button" @click="agendarCita">
              Agendar cita
            </button>

            <p class="panel__mensaje" v-if="mensaje">
              {{ mensaje }}
            </p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppSelect from "../components/AppSelect.vue";

const materias = ["Cálculo", "Álgebra", "Programación", "Bases de datos"];
const grupos = ["Grupo A", "Grupo B", "Grupo C"];

const materiaSeleccionada = ref("");
const grupoSeleccionado = ref("");
const mensaje = ref("");

function agendarCita() {
  if (!materiaSeleccionada.value || !grupoSeleccionado.value) {
    mensaje.value = "Selecciona materia y grupo antes de agendar.";
    return;
  }
  mensaje.value = `Cita agendada para ${materiaSeleccionada.value}, ${grupoSeleccionado.value}.`;
}
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  background: #f3f4f6;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* SIDEBAR */
.sidebar {
  width: 220px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.sidebar__logo {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar__link {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #4b5563;
  text-decoration: none;
}

.sidebar__link--active {
  background: #2563eb;
  color: #ffffff;
}

/* MAIN AREA */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* TOPBAR */
.topbar {
  height: 56px;
  background: #2563eb;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  font-size: 0.95rem;
}

.topbar__title {
  font-weight: 600;
}

.topbar__user {
  font-weight: 500;
}

/* CONTENT */
.content {
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* PANEL CENTRAL */
.panel {
  background: #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 720px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
}

.panel__title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.panel__subtitle {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

.panel__form {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 340px;
}

.panel__label {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  display: block;
}

.panel__info {
  font-size: 0.85rem;
  margin: 0.4rem 0 0.8rem;
  color: #4b5563;
}

.panel__button {
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: none;
  background: #2563eb;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
}

.panel__button:hover {
  background: #1d4ed8;
}

.panel__mensaje {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  color: #16a34a;
}
</style>
