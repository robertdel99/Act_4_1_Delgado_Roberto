<template>
  <div class="layout">
    <aside class="sidebar">
      <nav class="sidebar__nav">

        <RouterLink
          to="/dashboard"
          class="sidebar__link"
          :class="{ 'sidebar__link--active': $route.path === '/dashboard' }"
        >
          Dashboard
        </RouterLink>

        <RouterLink
          to="/account"
          class="sidebar__link"
          :class="{ 'sidebar__link--active': $route.path === '/account' }"
        >
          Account
        </RouterLink>

        <RouterLink
          to="/chats"
          class="sidebar__link"
          :class="{ 'sidebar__link--active': $route.path === '/chats' }"
        >
          Chats
        </RouterLink>

        <RouterLink
          to="/settings"
          class="sidebar__link"
          :class="{ 'sidebar__link--active': $route.path === '/settings' }"
        >
          Settings
        </RouterLink>

      </nav>
    </aside>

    <div class="layout__main">
      <header class="layout__topbar">
        <span class="topbar__title">Bienvenido User Name</span>
      </header>

      <main class="layout__content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: 100vh;
  background: #f3f4f6;
}

/* Sidebar */
.sidebar {
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 1rem;
}

.sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar__link {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  text-decoration: none;
  color: #374151;
  font-size: 0.95rem;
}

.sidebar__link--active {
  background: #2563eb;
  color: #ffffff;
}

/* Main */
.layout__main {
  display: flex;
  flex-direction: column;
}

.layout__topbar {
  background: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
}

.topbar__title {
  font-weight: 600;
}

.layout__content {
  flex: 1;
  padding: 2rem;
}

/* ============================
   RESPONSIVE PARA MÓVIL
============================ */
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;      /* Sidebar arriba, contenido abajo */
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    padding: 0.75rem 1rem;
  }

  .sidebar__nav {
    flex-direction: row;
    gap: 0.25rem;
    overflow-x: auto;
  }

  .layout__content {
    padding: 1rem;
  }
}
</style>
