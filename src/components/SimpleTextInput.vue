<script setup>

</script>


<template> 
<div class="textfield-container">
          <p>Write your idea below to start!</p>
          <div class="textfield-elements">
            <label for="search" class="hidden">Message</label>
            <input type="text" class="textfield" placeholder="Can you create a cool site for me?">
            <button class="textfield-btn"><i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
</template>

<style scoped>
.textfield-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.textfield-container p{
  font-size: 1.2rem;
}
.hidden{
  display: none;
}
.textfield-elements{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  position: relative;
}
.textfield-btn{
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
  position: absolute;
  right: 8px;
  height: 75%;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
.textfield-btn:hover{
  background-color: #FC8C3D;
}
.textfield{
  display: flex;
  align-items: center;
  padding: 12px 32px;
  border-radius: 90px;
  background: linear-gradient(25deg, #1C1C1C, #2E2E2E);
  color: var(--beige);
  border: rgba(211, 197, 174, .3) solid 1px;
  width: 512px;
  height: 3rem;

  font-size: 1rem;

  box-shadow: 
    -4px 4px 16px rgb(165, 165, 165, .1) inset,
    4px -4px 16px rgb(165, 165, 165, .1) inset,
    0 4px 30px rgba(0, 0, 0, 0.1);

  transition: all .3s cubic-bezier(.25, .8, .25, 1);
}
.textfield::placeholder{
  color: rgba(193, 187, 176, .5);;
}
.textfield:hover{
  border: rgba(211, 197, 174, 0.7) solid 1px;
}
.textfield:focus{
  border: #FC8C3D 1px solid;
  outline: none;
}
</style>