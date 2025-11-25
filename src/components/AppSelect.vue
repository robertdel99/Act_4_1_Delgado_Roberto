<script setup>
const props = defineProps({
  options: { type: Array, default: () => [] },
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Selecciona una opción' },
  label: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const onChange = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <label class="field">
    <span v-if="label" class="field__label">{{ label }}</span>

    <select
      class="field__select"
      :value="modelValue"
      @change="onChange"
    >
      <option value="" disabled hidden>{{ placeholder }}</option>
      <option
        v-for="opt in options"
        :key="opt"
        :value="opt"
      >
        {{ opt }}
      </option>
    </select>
  </label>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.field__label {
  font-size: 0.85rem;
  font-weight: 600;
}

.field__select {
  width: 100%;
  padding: 0.6rem;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font-size: 0.9rem;
}
</style>
