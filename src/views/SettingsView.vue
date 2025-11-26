<!-- src/views/SettingsView.vue -->
<template>
  <AppLayout current="settings">
    <div class="content">
      <section class="panel">
        <div class="panel__header">
          <div>
            <h2 class="panel__title">Configuración</h2>
            <p class="panel__subtitle">
              Ajusta algunas preferencias básicas de tu cuenta como alumno dentro del sistema de tutorías.
            </p>
          </div>

          <div class="panel__meta">
            <span class="meta__pill">Preferencias del alumno</span>
          </div>
        </div>

        <div class="panel__grid">
          <!-- COLUMNA IZQUIERDA: PREFERENCIAS PRINCIPALES -->
          <div class="panel__card">
            <h3 class="panel__section-title">Preferencias básicas</h3>

            <div class="setting-row">
              <div class="setting-row__info">
                <span class="setting-row__label">Notificaciones por correo</span>
                <span class="setting-row__hint">
                  Recibir avisos cuando el tutor responda un mensaje o confirme una cita.
                </span>
              </div>
              <span class="setting-row__value">Activadas</span>
            </div>

            <div class="setting-row">
              <div class="setting-row__info">
                <span class="setting-row__label">Tema de la interfaz</span>
                <span class="setting-row__hint">
                  Selecciona el tipo de apariencia para el Dashboard.
                </span>
              </div>
              <!-- Uso de Web Component: AppSelect -->
              <AppSelect
                :options="temas"
                v-model="temaSeleccionado"
              />
            </div>

            <div class="setting-row">
              <div class="setting-row__info">
                <span class="setting-row__label">Idioma</span>
                <span class="setting-row__hint">
                  Idioma preferido para los mensajes y textos del sistema.
                </span>
              </div>
              <!-- Uso de Web Component: AppSelect -->
              <AppSelect
                :options="idiomas"
                v-model="idiomaSeleccionado"
              />
            </div>

            <div class="panel__actions">
              <!-- Uso de Web Component: AppButton -->
              <AppButton :disabled="true">
                Guardar cambios (solo demostración)
              </AppButton>
            </div>

            <p class="panel__note">
              Los valores mostrados son de ejemplo. Esta pantalla solo ilustra cómo
              podrían gestionarse las preferencias de un alumno dentro del Dashboard.
            </p>
          </div>

          <!-- COLUMNA DERECHA: RESUMEN/EXPLICACIÓN -->
          <div class="panel__card panel__card--muted">
            <h3 class="panel__section-title">Vista de configuración (mock)</h3>
            <p class="panel__text">
              Esta sección forma parte del sistema de tutorías desde el punto de vista del alumno.
              El objetivo es mostrar cómo se vería una pantalla de ajustes integrada al layout
              principal.
            </p>
            <ul class="panel__list">
              <li>Uso de <strong>AppLayout</strong> para mantener la misma estructura del Dashboard.</li>
              <li>Uso de <strong>AppSelect</strong> para representar opciones de tema e idioma.</li>
              <li>Uso de <strong>AppButton</strong> para la acción de guardar (solo visual).</li>
            </ul>
            <p class="panel__text">
              En una implementación real, estas opciones se guardarían en el perfil del alumno
              y afectarían el comportamiento de notificaciones y apariencia del sistema.
            </p>
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref } from "vue"
import AppLayout from "../layout/AppLayout.vue"
import AppSelect from "../components/AppSelect.vue"
import AppButton from "../components/AppButton.vue"

const temas = ["Claro", "Oscuro", "Automático según el sistema"]
const idiomas = ["Español (MX)", "Español (ES)", "Inglés (EN)"]

const temaSeleccionado = ref(temas[0])
const idiomaSeleccionado = ref(idiomas[0])
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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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

/* GRID INTERNO */
.panel__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 1.5rem;
}

.panel__card {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: #000000;
}

.panel__card--muted {
  background: #f3f4f6;
}

.panel__section-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.9rem;
  color: #000000;
}

/* SETTINGS ROWS */
.setting-row {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.9fr);
  gap: 0.75rem;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.setting-row:last-of-type {
  border-bottom: none;
}

.setting-row__info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.setting-row__label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #000000;
}

.setting-row__hint {
  font-size: 0.8rem;
  color: #000000;
}

.setting-row__value {
  font-size: 0.9rem;
  text-align: right;
  color: #000000;
}

/* ACCIONES */
.panel__actions {
  margin-top: 1rem;
}

.panel__note {
  font-size: 0.8rem;
  margin-top: 0.8rem;
  color: #000000;
}

/* TEXTO INFORMATIVO */
.panel__text {
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  color: #000000;
}

.panel__list {
  margin-left: 1.2rem;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: #000000;
}

.panel__list li {
  margin-bottom: 0.25rem;
}

/* Responsive */
@media (max-width: 900px) {
  .panel {
    padding: 1.5rem;
  }

  .panel__grid {
    grid-template-columns: 1fr;
  }

  .setting-row {
    grid-template-columns: 1fr;
    align-items: flex-start;
  }

  .setting-row__value {
    text-align: left;
  }
}
</style>
