<script setup>
import { ref } from 'vue'

const props = defineProps({
  btnLabel: String,
  href: String,
})
</script>

<template>
  <a class="button" :href="props.href">{{ props.btnLabel }}</a>
</template>


<style scoped>
.button{
  display: inline-block;
  padding: 12px 32px;
  border-radius: 90px;
  color: black;
  background-color: var(--beige);
  text-decoration: none;
  font-weight: 400;
  transition: all .3s cubic-bezier(.25, .8, .25, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.button:hover{
  background-color: #FC8C3D;
}
.button:active{
  transform: scale(.95);
}

.secondary-button{
  display: inline-block;
  padding: 12px 32px;
  border-radius: 90px;
  text-decoration: none;
  font-weight: 400;
  transition: all .3s cubic-bezier(.25, .8, .25, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(193, 187, 176, .3);
  border: #C1BBB0 1px solid;
  color: #C1BBB0;
}
.secondary-button:hover{
  background-color: rgba(193, 187, 176, .5);
}

.disabled{
  cursor: not-allowed;
  background-color: rgba(193, 187, 176, .3);
  border: #C1BBB0 1px solid;
  color: #C1BBB0;
  opacity: .5;
}
.disabled:hover{
  background-color: rgba(193, 187, 176, .3);
}
</style>