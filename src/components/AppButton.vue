<template>
  <button
    class="btn"
    @click="onClick"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: "button" },
})

const emit = defineEmits(["click"])

function onClick(e) {
  emit("click", e)
}
</script>

<style scoped>
.btn {
  width: 100%;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
}

.btn:hover {
  background: #1d4ed8;
}
</style>
