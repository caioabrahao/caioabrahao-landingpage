<script setup>
import { ref } from 'vue'

const props = defineProps({
  btnLabel: String,
  href: String,
  btnStyle: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <a :class="['button', props.btnStyle]" :href="props.href">{{ props.btnLabel }}</a>
</template>


<style scoped>
.button{
  display: inline-block;
  padding: 12px 32px;
  border-radius: 90px;
  font-weight: 400;
  text-decoration: none;
  transition: all .3s cubic-bezier(.25, .8, .25, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.button:active{
  transform: scale(.95);
}

.primary{
  color: black;
  background-color: var(--beige);
}
.primary:hover{
  background-color: #FC8C3D;
}

.secondary{
  background-color: rgba(193, 187, 176, .3);
  border: #C1BBB0 1px solid;
  color: #C1BBB0;
}
.secondary:hover{
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