<script>
export default {
    name: 'GrainOverlay'
}
</script>


<template>
    <div class="grain-texture"></div>
</template>


<style scoped>
.grain-texture{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100%;
  pointer-events: none;

  background-image: url('/img/GRAIN.png');
  mix-blend-mode: soft-light;
  opacity: .5;
}
</style>