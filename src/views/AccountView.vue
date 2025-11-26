<!-- src/views/AccountView.vue -->
<template>
  <AppLayout>
    <div class="content">
      <section class="panel">
        <h2 class="panel__title">Tu cuenta</h2>
        <p class="panel__subtitle">
          Aquí puedes consultar algunos datos básicos del alumno dentro del sistema de tutorías.
        </p>

        <div class="panel__grid">
          <!-- Bloque: datos principales -->
          <div class="panel__block">
            <h3 class="panel__section-title">Datos del alumno</h3>

            <p class="panel__info"><strong>Nombre:</strong> User Name</p>
            <p class="panel__info"><strong>Correo:</strong> alumno@ejemplo.com</p>
            <p class="panel__info"><strong>Rol:</strong> Alumno</p>
            <p class="panel__info"><strong>Matrícula:</strong> 1900000</p>
            <p class="panel__info"><strong>Programa:</strong> Ingeniería en Sistemas Inteligentes</p>
          </div>

          <!-- Bloque: resumen de uso del sistema -->
          <div class="panel__block panel__block--muted">
            <h3 class="panel__section-title">Resumen de actividad</h3>
            <p class="panel__info">
              Este módulo podría mostrar en el futuro información como:
            </p>
            <ul class="panel__list">
              <li>Última fecha de acceso al sistema.</li>
              <li>Número de tutorías agendadas.</li>
              <li>Estado general del perfil del alumno.</li>
            </ul>
            <p class="panel__info">
              Por ahora solo funciona como vista estática para ejemplificar el diseño del Dashboard.
            </p>
          </div>
        </div>
      </section>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layout/AppLayout.vue"
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
  max-width: 960px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
  margin-bottom: 1.5rem;
}

/* GRID INTERNO */
.panel__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 1.5rem;
}

.panel__block {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: #000000;
}

.panel__block--muted {
  background: #f3f4f6;
}

.panel__section-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #000000;
}

.panel__info {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
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
  .panel__grid {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 1.5rem;
  }
}
</style>
