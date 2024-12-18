<script setup>
const props = defineProps({
  iconsSize: {
    type: String,
    default: '32px'
  },
  iconsGap: {
    type: String,
    default: '32px'
  }
})
</script>


<template>
<div class="socials-lineup" :style="{'--icons-size': iconsSize, '--icons-gap': iconsGap}">
          <a href="https://github.com/caioabrahao" target="_blank" class="social-link"><i class="ri-github-fill"></i></a>
          <a href="https://www.instagram.com/caio.abrahao/" target="_blank" class="social-link"><i class="ri-instagram-fill"></i></a>
          <a href="https://www.behance.net/caioabrahao" target="_blank" class="social-link"><i class="ri-behance-fill"></i></a>
          <a href="https://www.linkedin.com/in/caioabrahao/" target="_blank" class="social-link"><i class="ri-linkedin-fill"></i></a>
        </div>
</template>


<style scoped>
.socials-lineup{
  display: flex;
  gap: var(--icons-gap, 32px); /* Fallback value if not provided */
  font-size: var(--icons-size, 32px); /* Fallback value if not provided */
}


.social-link{
  color: var(--beige);
  text-decoration: none;
  transition: all .3s cubic-bezier(.25, .8, .25, 1);
}
.social-link:hover{
  filter: drop-shadow(0 0 16px rgba(211, 197, 174, 0.5));
}

</style>