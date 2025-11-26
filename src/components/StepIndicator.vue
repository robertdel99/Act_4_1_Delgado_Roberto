<template>
  <div class="steps">
    <span class="steps__label">
      Paso {{ activeStep }} de {{ totalSteps }}
    </span>
    <div class="steps__dots">
      <span
        v-for="n in totalSteps"
        :key="n"
        class="steps__dot"
        :class="{ 'steps__dot--active': n === activeStep }"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  activeStep: { type: Number, required: true },
  totalSteps: { type: Number, default: 3 },
})
</script>

<style scoped>
.steps {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.steps__label {
  font-size: 0.8rem;
  font-weight: 500;
  color: #4b5563;
}

.steps__dots {
  display: flex;
  gap: 0.3rem;
}

.steps__dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #d1d5db;
}

.steps__dot--active {
  width: 18px;
  background: #2563eb;
}
</style>
