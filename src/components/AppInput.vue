<script setup>
const props = defineProps({
  modelValue: { type: String, default: "" },
  type: { type: String, default: "text" },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
})

const emit = defineEmits(["update:modelValue"])

const onInput = (e) => {
  emit("update:modelValue", e.target.value)
}
</script>

<template>
  <label class="field">
    <span v-if="label" class="field__label">{{ label }}</span>
    <input
      class="field__input"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
    />
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

.field__input {
  padding: 0.6rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font-size: 0.9rem;
}

.field__input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.25);
}
</style>
