<script setup>

</script>


<template> 
<div class="animated-background">
    <img class="gradient-ball" id="orange" src="/balls/orange-ball.svg" alt="ball">
    <img class="gradient-ball" id="blue" src="/balls/cyan-ball.svg" alt="ball">
</div>
</template>

<style scoped>
.animated-background{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.gradient-ball{
  width: 600px;
  height: auto;
}
</style>