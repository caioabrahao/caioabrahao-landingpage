<script setup>
import Header from './components/Header.vue';
import GlassBackground from './components/overlays/GlassBackground.vue';
import GrainOverlay from './components/overlays/GrainOverlay.vue';
</script>


<template>
  <GrainOverlay></GrainOverlay>
  <GlassBackground></GlassBackground>
  <Header></Header>

  <router-view></router-view>

</template>

<style scoped>

</style>
