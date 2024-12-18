<script setup>
import SocialLinks from '../components/SocialLinks.vue';
</script>


<template> 

<main>
<section class="section about">
    <div class="about-content">
        <img src="/img/about-photo.png" alt="caio abrahão photo" class="about-photo">
        <div class="about-info">
            <div>
                <h2 class="title-2">Caio Abrahão</h2>
                <p class="project-subtitle">GRAPHIC DESIGNER | FRONT END DEVELOPER</p>
            </div>
            <SocialLinks></SocialLinks>

            <p class="about-description">
                Hi! I'm a web designer also keen on front-end development!
                At the end of the day, I just love playing around with colors, shapes, fonts and icons to create interactive experiences. Thats my jam!
            </p>

            <div>
                <h3>DESIGN STRENGTHS</h3>
                <div class="skills">
                    <div class="skill">
                        <i class="ri-pencil-ruler-2-fill"></i>
                        <p>UI/UX Design</p>
                    </div>
                    <div class="skill">
                        <i class="ri-paint-brush-fill"></i>
                        <p>Graphic Design</p>
                    </div>
                    <div class="skill">
                        <i class="ri-code-s-slash-fill"></i>
                        <p>Front End Development</p>
                    </div>

                </div>
            </div>

            <div>
                <h3>PROGRAMS</h3>
                <div class="skills">
                    <img class="program-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png" alt="illustrator">
                    <img class="program-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png" alt="photoshop">
                    <img class="program-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png" alt="premiere">
                    <img class="program-icon" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="figma">
                    <img class="program-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Blenderlogo.svg/2048px-Blenderlogo.svg.png" alt="blender">
            </div>
        </div>
        </div>
    </div>
    
</section>
</main>

</template>


<style scoped>
.about{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.about-content{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  height: 100%;
}

.about-info{
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
}
.about-info h3{
  font-size: 1.2 rem;
  font-weight: 600;
}

.about-photo{
  height: 50%;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 35px;
  background: linear-gradient(25deg, #1C1C1C, #2E2E2E);
  color: var(--beige);
  border: rgba(211, 197, 174, .3) solid 1px;
}
.about-description{
  opacity: .5;
}

.skills{
  display: flex;
  gap: 32px;
}
.skill{
  display: flex;
  align-items: center;
  gap: 8px;

  opacity: .5;
}

.program-icon{
  width: 32px;
  height: 32px;
}

</style>