<!-- src/views/DashboardView.vue -->
<template>
  <AppLayout>
    <div class="content">
      <!-- PANEL PRINCIPAL -->
      <section class="panel">
        <div class="panel__header">
          <div>
            <h2 class="panel__title">Sistema de tutorías</h2>
            <p class="panel__subtitle">
              Selecciona una materia, grupo, tutor, día y horario para agendar tu cita.
            </p>
          </div>

          <StepIndicator :active-step="paso" :total-steps="3" />
        </div>

        <div class="panel__grid">
          <!-- Columna izquierda: formulario por pasos -->
          <div class="panel__form">
            <!-- PASO 1: materia y grupo -->
            <div v-if="paso === 1">
              <h3 class="panel__step-title">Paso 1: Materia y grupo</h3>

              <label class="panel__label">Selecciona una materia:</label>
              <AppSelect
                :options="materias"
                v-model="materiaSeleccionada"
              />

              <p class="panel__info" v-if="materiaSeleccionada">
                Seleccionaste: <strong>{{ materiaSeleccionada }}</strong>
              </p>

              <label class="panel__label">Selecciona un grupo:</label>
              <AppSelect
                :options="grupos"
                v-model="grupoSeleccionado"
              />

              <p class="panel__info" v-if="grupoSeleccionado">
                Grupo seleccionado: <strong>{{ grupoSeleccionado }}</strong>
              </p>

              <AppButton
                full
                :disabled="!puedePasarPaso1"
                @click="irAHorarios"
              >
                Continuar
              </AppButton>
            </div>

            <!-- PASO 2: tutor, fecha y horario -->
            <div v-else-if="paso === 2">
              <h3 class="panel__step-title">Paso 2: Tutor, fecha y horario</h3>

              <p class="panel__info">
                Materia: <strong>{{ materiaSeleccionada }}</strong> ·
                Grupo: <strong>{{ grupoSeleccionado }}</strong>
              </p>

              <label class="panel__label">Selecciona un día:</label>
              <input
                class="panel__date"
                type="date"
                v-model="fechaSeleccionada"
                :min="hoyISO"
              />

              <label class="panel__label">Selecciona un horario:</label>
              <select v-model="horarioSeleccionado" class="panel__select">
                <option value="" disabled>Selecciona un horario</option>
                <option
                  v-for="(h, i) in horariosDisponibles"
                  :key="i"
                  :value="h"
                >
                  {{ h }}
                </option>
              </select>

              <AppButton
                full
                :disabled="!puedePasarPaso2"
                @click="confirmarCita"
              >
                Agendar cita
              </AppButton>

              <AppButton
                full
                variant="secondary"
                @click="volverPaso1"
              >
                Volver
              </AppButton>
            </div>

            <!-- PASO 3: confirmación -->
            <div v-else-if="paso === 3">
              <h3 class="panel__step-title panel__step-title--success">
                Cita agendada
              </h3>

              <p class="panel__info">
                Tu cita quedó registrada para
                <strong>{{ materiaSeleccionada }}</strong>,
                {{ grupoSeleccionado }},
                el <strong>{{ fechaFormateada }}</strong>
                a las <strong>{{ horarioSeleccionado }}</strong>.
              </p>

              <p class="panel__info">
                Tutor asignado:
                <strong>{{ tutorSeleccionado?.nombreCompleto }}</strong>
              </p>

              <AppButton
                full
                @click="nuevaCita"
              >
                Agendar otra cita
              </AppButton>
            </div>

            <!-- Mensaje general -->
            <p class="panel__mensaje" v-if="mensaje">
              {{ mensaje }}
            </p>
          </div>

          <!-- Columna derecha: tutores disponibles -->
          <div class="panel__tutors" v-if="tutoresDisponibles.length">
            <h3 class="panel__tutors-title">Tutores disponibles</h3>
            <p class="panel__tutors-subtitle">
              Elige el tutor con el enfoque que mejor se adapte a tus necesidades.
            </p>

            <div class="tutor-list">
              <article
                v-for="tutor in tutoresDisponibles"
                :key="tutor.id"
                class="tutor-card"
                :class="{
                  'tutor-card--active':
                    tutorSeleccionado && tutorSeleccionado.id === tutor.id
                }"
                @click="seleccionarTutor(tutor)"
              >
                <h4 class="tutor-card__name">{{ tutor.nombreCompleto }}</h4>
                <p class="tutor-card__role">{{ tutor.rol }}</p>
                <p class="tutor-card__focus">{{ tutor.enfoque }}</p>
                <p class="tutor-card__meta">
                  {{ tutor.correo }} · Ext. {{ tutor.extension }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- HISTORIAL DE CITAS -->
      <section v-if="historialCitas.length" class="history">
        <h3 class="history__title">Historial de citas agendadas</h3>
        <p class="history__subtitle">
          Consulta rápidamente las tutorías que has agendado desde este panel.
        </p>

        <div class="history__table-wrapper">
          <table class="history__table">
            <thead>
              <tr>
                <th>Materia</th>
                <th>Grupo</th>
                <th>Fecha</th>
                <th>Horario</th>
                <th>Tutor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cita, index) in historialCitas" :key="index">
                <td>{{ cita.materia }}</td>
                <td>{{ cita.grupo }}</td>
                <td>{{ cita.fecha }}</td>
                <td>{{ cita.hora }}</td>
                <td>{{ cita.tutor }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </AppLayout>
</template>

<script setup>
import { computed, ref } from "vue"
import AppLayout from "../layout/AppLayout.vue"
import AppSelect from "../components/AppSelect.vue"
import AppButton from "../components/AppButton.vue"
import StepIndicator from "../components/StepIndicator.vue"

/* Datos base */
const materias = ["Cálculo", "Álgebra", "Programación", "Bases de datos"]
const grupos = ["Grupo A", "Grupo B", "Grupo C"]

const horariosDisponibles = ["09:00", "10:30", "12:00", "14:00", "16:00"]

/* Mapa de tutores por materia: dos tutores con ficha técnica */
const tutoresPorMateria = {
  "Cálculo": [
    {
      id: "ramirez",
      nombreCompleto: "Dra. Ana Ramírez",
      rol: "Profesora de Cálculo",
      enfoque:
        "Cálculo diferencial e integral, preparación para exámenes parciales.",
      correo: "ana.ramirez@universidad.mx",
      extension: "1201",
    },
    {
      id: "gonzalez",
      nombreCompleto: "Mtro. Luis González",
      rol: "Profesor de Matemáticas",
      enfoque: "Resolución de problemas y regularización paso a paso.",
      correo: "luis.gonzalez@universidad.mx",
      extension: "1202",
    },
  ],
  "Álgebra": [
    {
      id: "sandoval",
      nombreCompleto: "Mtro. Carlos Sandoval",
      rol: "Profesor de Álgebra",
      enfoque: "Álgebra lineal y matrices para ingeniería.",
      correo: "carlos.sandoval@universidad.mx",
      extension: "1301",
    },
    {
      id: "ruiz",
      nombreCompleto: "Mtra. Sofía Ruiz",
      rol: "Profesora de Matemáticas",
      enfoque: "Álgebra básica y reforzamiento de fundamentos.",
      correo: "sofia.ruiz@universidad.mx",
      extension: "1302",
    },
  ],
  "Programación": [
    {
      id: "morales",
      nombreCompleto: "Ing. Juan Morales",
      rol: "Profesor de Programación",
      enfoque: "Lógica de programación, C y C++, resolución de errores.",
      correo: "juan.morales@universidad.mx",
      extension: "1401",
    },
    {
      id: "lopez",
      nombreCompleto: "Mtra. Carla López",
      rol: "Profesora de Programación",
      enfoque: "Programación orientada a objetos y buenas prácticas.",
      correo: "carla.lopez@universidad.mx",
      extension: "1402",
    },
  ],
  "Bases de datos": [
    {
      id: "ortega",
      nombreCompleto: "Ing. Diego Ortega",
      rol: "Profesor de Bases de datos",
      enfoque: "SQL, modelado relacional y consultas complejas.",
      correo: "diego.ortega@universidad.mx",
      extension: "1501",
    },
    {
      id: "mendez",
      nombreCompleto: "Mtra. Laura Méndez",
      rol: "Profesora de Bases de datos",
      enfoque: "Normalización y diseño de bases de datos desde cero.",
      correo: "laura.mendez@universidad.mx",
      extension: "1502",
    },
  ],
}

/* Estado */
const materiaSeleccionada = ref("")
const grupoSeleccionado = ref("")
const fechaSeleccionada = ref("")
const horarioSeleccionado = ref("")
const mensaje = ref("")
const paso = ref(1)

const tutoresDisponibles = ref([])
const tutorSeleccionado = ref(null)

/* Historial de citas agendadas */
const historialCitas = ref([])

/* Fecha mínima para el calendario (hoy) */
const hoyISO = new Date().toISOString().split("T")[0]

/* Computadas */
const puedePasarPaso1 = computed(
  () => materiaSeleccionada.value && grupoSeleccionado.value,
)

const puedePasarPaso2 = computed(
  () =>
    fechaSeleccionada.value &&
    horarioSeleccionado.value &&
    tutorSeleccionado.value,
)

const fechaFormateada = computed(() => {
  if (!fechaSeleccionada.value) return ""
  const [year, month, day] = fechaSeleccionada.value.split("-")
  return `${day}/${month}/${year}`
})

/* Métodos */
function irAHorarios() {
  if (!puedePasarPaso1.value) {
    mensaje.value = "Selecciona materia y grupo antes de continuar."
    return
  }

  mensaje.value = ""

  // cargar tutores según materia seleccionada
  tutoresDisponibles.value = tutoresPorMateria[materiaSeleccionada.value] || []
  tutorSeleccionado.value = tutoresDisponibles.value[0] || null

  // reset de fecha y horario
  fechaSeleccionada.value = ""
  horarioSeleccionado.value = ""

  paso.value = 2
}

function seleccionarTutor(tutor) {
  tutorSeleccionado.value = tutor
}

function confirmarCita() {
  if (!puedePasarPaso2.value) {
    mensaje.value = "Selecciona día, horario y tutor para agendar la cita."
    return
  }

  mensaje.value = ""

  // Guardar en historial
  historialCitas.value.push({
    materia: materiaSeleccionada.value,
    grupo: grupoSeleccionado.value,
    fecha: fechaFormateada.value,
    hora: horarioSeleccionado.value,
    tutor: tutorSeleccionado.value?.nombreCompleto || "",
  })

  paso.value = 3
}

function volverPaso1() {
  paso.value = 1
  horarioSeleccionado.value = ""
  fechaSeleccionada.value = ""
  mensaje.value = ""
}

function nuevaCita() {
  // Resetea pero deja el historial
  materiaSeleccionada.value = ""
  grupoSeleccionado.value = ""
  fechaSeleccionada.value = ""
  horarioSeleccionado.value = ""
  tutoresDisponibles.value = []
  tutorSeleccionado.value = null
  mensaje.value = ""
  paso.value = 1
}
</script>

<style scoped>
.content {
  flex: 1;
  padding: 2rem;
  color: #000000;
}

/* PANEL CENTRAL */
.panel {
  background: #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 1100px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.panel__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.panel__title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000000;
}

.panel__subtitle {
  font-size: 0.95rem;
  color: #000000;
}

/* Panel grid: formulario + tutores */
.panel__grid {
  display: grid;
  grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
  gap: 1.5rem;
  align-items: flex-start;
}

.panel__form {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: #000000;
}

/* Espaciado para los botones dentro del formulario */
.panel__form app-button {
  display: block;
  margin-top: 0.5rem;
}

.panel__label {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  display: block;
  color: #000000;
}

.panel__info {
  font-size: 0.85rem;
  margin: 0.4rem 0 0.8rem;
  color: #000000;
}

.panel__mensaje {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  color: #000000;
}

.panel__step-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000000;
}

.panel__step-title--success {
  color: #000000;
}

.panel__select,
.panel__date {
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #000000;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  outline: none;
  color: #000000;
  background: #ffffff;
}

.panel__select:focus,
.panel__date:focus {
  border-color: #000000;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
}

/* TUTORES */
.panel__tutors {
  background: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: #000000;
}

.panel__tutors-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000000;
}

.panel__tutors-subtitle {
  font-size: 0.85rem;
  margin-bottom: 1rem;
  color: #000000;
}

.tutor-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #000000;
}

.tutor-card {
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding: 0.75rem 0.9rem;
  background: #ffffff;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.1s ease;
  color: #000000;
}

.tutor-card:hover {
  border-color: #000000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  transform: translateY(-1px);
}

.tutor-card--active {
  border-color: #000000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.tutor-card__name {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.1rem;
  color: #000000;
}

.tutor-card__role {
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  color: #000000;
}

.tutor-card__focus {
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  color: #000000;
}

.tutor-card__meta {
  font-size: 0.78rem;
  color: #000000;
}

/* HISTORIAL */
.history {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  max-width: 1100px;
  color: #000000;
}

.history__title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #000000;
}

.history__subtitle {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #000000;
}

.history__table-wrapper {
  overflow-x: auto;
  color: #000000;
}

.history__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  color: #000000;
}

.history__table th,
.history__table td {
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  color: #000000;
}

.history__table th {
  background: #f3f4f6;
  font-weight: 600;
  color: #000000;
}

/* Responsive */
@media (max-width: 900px) {
  .panel__grid {
    grid-template-columns: 1fr;
  }
}
</style>
