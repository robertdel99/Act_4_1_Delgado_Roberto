<!-- src/views/LoginView.vue -->
<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="login-title">SISTEMA DE TUTORIAS UASLP</h1>

      <form class="login-form" @submit.prevent="goToDashboard">
        <div class="login-field">
          <input
            type="email"
            placeholder="CORREO ELECTRÓNICO"
            required
          />
        </div>

        <div class="login-field">
          <input
            type="password"
            placeholder="CONTRASEÑA"
            required
          />
        </div>

        <button type="submit" class="login-button">
          INICIAR SESIÓN
        </button>

        <a href="#" class="login-link">
          ¿Olvidaste tu contraseña?
        </a>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDashboard() {
  // Aquí no validamos nada, solo navegamos al dashboard
  router.push('/dashboard')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}

.login-card {
  background: #ffffff;
  width: 360px;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.login-title {
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: #555;
  margin-bottom: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-field input {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border-radius: 6px;
  border: 1px solid #d0d7e2;
  font-size: 0.85rem;
  outline: none;
}

.login-field input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.2);
}

.login-button {
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.8rem;
  border-radius: 6px;
  border: none;
  background: #2563eb;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
}

.login-button:hover {
  background: #1d4ed8;
}

.login-link {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: #2563eb;
  text-decoration: none;
}
</style>
