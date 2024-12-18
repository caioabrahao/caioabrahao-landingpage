<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1,});

  tl.to('#blue', { x: -600, duration: 3, ease: "sine.inOut",})
  tl.to('#orange', { x: 600, duration: 3,ease: "sine.inOut",}, '<')
  tl.set('#blue', { zIndex: -4,})
  tl.to('#blue', { x: 0, duration: 5, ease: "sine.inOut",})
  tl.to('#orange', { x: 0, duration: 5, ease: "sine.inOut" }, '<')

  tl.timeScale(.5);
});
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