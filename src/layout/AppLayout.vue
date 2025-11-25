<template>
  <div class="layout">
    <aside class="layout__sidebar">
      <div class="logo">Dashboard</div>

      <nav class="menu">
        <a href="#" class="menu__item menu__item--active">
          Dashboard
        </a>
        <a href="#" class="menu__item">Account</a>
        <a href="#" class="menu__item">Chats</a>
        <a href="#" class="menu__item">Settings</a>
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

.layout__sidebar {
  background: #f4f5f7;
  border-right: 1px solid #e5e7eb;
  padding: 1rem;
}

.logo {
  font-weight: 700;
  margin-bottom: 2rem;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.menu__item {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  text-decoration: none;
  color: #374151;
  font-size: 0.95rem;
}

.menu__item--active {
  background: #2563eb;
  color: #ffffff;
}

.layout__main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
</style>
