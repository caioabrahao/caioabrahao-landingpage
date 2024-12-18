<script>
export default {
    name: 'GlassBackground'
}
</script>


<template>
    <div class="glass"></div>
</template>


<style scoped>
.glass{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100%;
  will-change: backdrop-filter;

  background-color: rgba(217, 217, 217, .1);
  backdrop-filter: blur(70px);
  -webkit-backdrop-filter: blur(70px);
  box-shadow: 
    -16px 16px 82px rgb(165, 165, 165, .1) inset,
    16px -16px 82px rgb(165, 165, 165, .1) inset,
    0 4px 30px rgba(0, 0, 0, 0.1);
}
</style>