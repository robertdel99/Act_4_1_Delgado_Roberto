<template>
  <button
    :class="[
      'btn',
      `btn--${variant}`,
      {
        'btn--full': full,
        'btn--disabled': disabled,
      },
    ]"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: "button" },
  disabled: { type: Boolean, default: false },
  // primary | secondary
  variant: {
    type: String,
    default: "primary",
    validator: (v) => ["primary", "secondary"].includes(v),
  },
  // Hace el botón de ancho completo
  full: { type: Boolean, default: false },
})

const emit = defineEmits(["click"])

function onClick(e) {
  if (props.disabled) return
  emit("click", e)
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.05s ease;
}

/* Variantes */
.btn--primary {
  background: #2563eb;
  color: #ffffff;
}

.btn--primary:hover {
  background: #1d4ed8;
}

.btn--secondary {
  background: #e5e7eb;
  color: #111827;
}

.btn--secondary:hover {
  background: #d1d5db;
}

/* Ancho completo opcional */
.btn--full {
  width: 100%;
}

/* Estado deshabilitado */
.btn--disabled,
.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
  transform: none;
}
</style>
