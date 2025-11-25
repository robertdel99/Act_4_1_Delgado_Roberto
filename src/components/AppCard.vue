<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
})
</script>

<template>
  <section class="card">
    <header v-if="title || subtitle" class="card__header">
      <h2 v-if="title" class="card__title">{{ title }}</h2>
      <p v-if="subtitle" class="card__subtitle">{{ subtitle }}</p>
    </header>
    <div class="card__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.card {
  background: #f9fafb;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  max-width: 320px;
}

.card__header {
  margin-bottom: 1rem;
}

.card__title {
  font-size: 1rem;
  font-weight: 600;
}

.card__subtitle {
  font-size: 0.85rem;
  color: #6b7280;
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
