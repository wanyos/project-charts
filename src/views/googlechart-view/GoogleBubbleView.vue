<template>
    <div>
      <h3>BubbleChat</h3>
  
      <section>
     <GoogleBubble />
      </section>
    </div>
  </template>
  
  <script setup>
import GoogleBubble from '@/components/vue-google-components/GoogleBubble.vue';
  </script>
  
  <style lang="scss" scoped>
  section {
    display: flex;
    justify-content: center;
  }
  </style>
  