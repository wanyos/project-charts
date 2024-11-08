<template>
  <div class="reloj-container">
    <div class="reloj">
      {{ formatearHora(horas, minutos, segundos) }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  horas: {
    type: [Number, String],
    required: true,
    validator: (value) => {
      const num = Number(value)
      return num >= 0 && num <= 23
    }
  },
  minutos: {
    type: [Number, String],
    required: true,
    validator: (value) => {
      const num = Number(value)
      return num >= 0 && num <= 59
    }
  },
  segundos: {
    type: [Number, String],
    required: true,
    validator: (value) => {
      const num = Number(value)
      return num >= 0 && num <= 59
    }
  }
})

const formatearHora = (h, m, s) => {
  const horasStr = String(h).padStart(2, '0')
  const minutosStr = String(m).padStart(2, '0')
  const segundosStr = String(s).padStart(2, '0')
  return `${horasStr}:${minutosStr}:${segundosStr}`
}
</script>

<style scoped>
.reloj-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.reloj {
  background-color: white;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Digital', 'Courier New', Courier, monospace;
  font-size: 4rem;
  color: #0066ff;
  letter-spacing: 2px;
  border: 1px solid #ddd;
}

/* Font-face para simular el estilo de display digital */
@font-face {
  font-family: 'Digital';
  src: url('https://fonts.cdnfonts.com/css/digital-7-mono') format('woff2');
}
</style>
