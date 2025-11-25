<template>
  <AppLayout current="settings">
    <section class="panel">
      <h2 class="panel__title">Configuración</h2>
      <p class="panel__subtitle">
        Pantalla simple de ajustes, solo para mostrar el layout.
      </p>

      <div class="panel__card">
        <h3 class="panel__label">Preferencias básicas</h3>
        <ul class="settings-list">
          <li class="settings-list__item">
            Notificaciones por correo: Activadas
          </li>
          <li class="settings-list__item">
            Tema: Claro
          </li>
          <li class="settings-list__item">
            Idioma: Español (MX)
          </li>
        </ul>
        <p class="panel__note">
          Los valores son de ejemplo. En una versión completa aquí se podrían editar estos datos.
        </p>
      </div>
    </section>
  </AppLayout>
</template>

<script setup>
import AppLayout from "../layout/AppLayout.vue";
</script>

<style scoped>
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

.panel__card {
  background: #10151aff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.panel__label {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.settings-list {
  list-style: none;
  padding: 0;
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
}

.settings-list__item + .settings-list__item {
  margin-top: 0.3rem;
}

.panel__note {
  font-size: 0.8rem;
  color: #6b7280;
}
</style>

