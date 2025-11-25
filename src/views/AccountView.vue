<template>
  <div class="dashboard">
    <aside class="sidebar">
      <div class="sidebar__logo">🏫</div>
      <nav class="sidebar__nav">
        <router-link to="/dashboard" class="sidebar__link">Dashboard</router-link>
        <router-link to="/account" class="sidebar__link sidebar__link--active">Account</router-link>
        <router-link to="/chats" class="sidebar__link">Chats</router-link>
        <router-link to="/settings" class="sidebar__link">Settings</router-link>
      </nav>
    </aside>

    <div class="main">
      <header class="topbar">
        <div class="topbar__title">Account</div>
        <div class="topbar__user">Bienvenido User Name</div>
      </header>

      <main class="content">
        <section class="panel">
          <h2 class="panel__title">Tu cuenta</h2>
          <p class="panel__subtitle">
            Aquí podrías ver y editar algunos datos básicos del profesor.
          </p>

          <div class="panel__form">
            <p class="panel__info">Nombre: User Name</p>
            <p class="panel__info">Correo: profesor@ejemplo.com</p>
            <p class="panel__info">Rol: Tutor académico</p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  background: #f3f4f6;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

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

.sidebar__link.router-link-active,
.sidebar__link--active {
  background: #2563eb;
  color: #ffffff;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

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

.content {
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

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

.panel__info {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #4b5563;
}
</style>
