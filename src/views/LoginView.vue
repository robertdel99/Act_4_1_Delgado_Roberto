<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import AppInput from "../components/AppInput.vue"
import AppButton from "../components/AppButton.vue"

const router = useRouter()

const email = ref("")
const password = ref("")
const error = ref("")

const onSubmit = () => {
  if (!email.value || !password.value) {
    error.value = "Ingresa tu correo y contraseña."
    return
  }

  error.value = ""
  router.push("/dashboard")
}
</script>

<template>
  <main class="login">
    <section class="login__card">
      <h1 class="login__title">SISTEMA DE TUTORIAS UASLP</h1>
      <h2 class="login__subtitle">INICIAR SESIÓN</h2>

      <form class="login__form" @submit.prevent="onSubmit">
        <AppInput
          v-model="email"
          type="email"
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
        />

        <AppInput
          v-model="password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
        />

        <AppButton type="submit" full>
          Iniciar sesión
        </AppButton>

        <p v-if="error" class="login__error">
          {{ error }}
        </p>

        <button type="button" class="login__link">
          ¿Olvidaste tu contraseña?
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login__card {
  width: 100%;
  max-width: 420px;
  background: #f9fafb;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.login__title {
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 0.75rem;
}

.login__subtitle {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.login__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login__error {
  margin-top: 0.25rem;
  font-size: 0.8rem;
  color: #dc2626;
}

.login__link {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  text-align: center;
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
}
</style>
