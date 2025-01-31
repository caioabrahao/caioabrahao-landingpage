<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import SocialLinks from '../components/SocialLinks.vue';
import SimpleTextInput from '../components/SimpleTextInput.vue';
import AnimatedBackground from '../components/AnimatedBackground.vue';
import Button from '../components/Button.vue';

import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function scrollTo(destinationId){
  gsap.to(window, { duration: .7, scrollTo: `${destinationId}` });
}

import { onMounted } from 'vue';

onMounted(() => {
  gsap.from('.hero-text h1', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
  gsap.from('.hero-text p', { duration: 1, y: -50, opacity: 0, ease: 'power2.out', delay: 0.3 });

  gsap.to('.ri-arrow-down-s-line' , { duration: 1.2, y: 10, repeat: -1, yoyo: true, ease: 'bounce' });
});
</script>



<template>
    <i class="ri-arrow-down-s-line" @click="scrollTo('#featured-projects')"></i>
    <AnimatedBackground></AnimatedBackground>
<main>
    <section class="section hero">

      <div class="overlay-circle"></div>

        <div class="hero-text">
          <h1 class="title-1">Caio Abrahão</h1>
          <p class="all-caps">multidisciplinary <strong>creative designer</strong></p>
          <Button class="button" btn-label="About Me!" href="/About"></Button>
        </div>
      </section>

      <section class="section featured-projects" id="featured-projects">
        <h2 class="title-2">featured project</h2>

        <div class="project-list">
          <ProjectCard
           proj-link="https://www.behance.net/gallery/214767069/My-2024-Portfolio-Caio-Abrahao#"
           proj-title="2024 Design Portfolio"
           proj-subtitle="A retrospective on my projects of the year"
           proj-description="A showcase of all my design related projects of 2024, featuring a 
                artistic experiments, graphic and web designs, illustrations and photography. <br> Check it right now
              on my Behance profile or click in this card!"
           proj-thumbnail-url="/thumbnails/2024portfolio-thumb.png">
          </ProjectCard>
        </div>

        <Button btn-label="Show More" href="/Portfolio" btn-style="secondary"></Button>
      </section>

      <section class="section contact">
        <h2 class="title-2">got something in mind?</h2>
        <p class="contact-description"> If you have an opinion, praise or an idea of your own, reach me out!<br>I would love to collaborate!</p>
        <SocialLinks></SocialLinks>

        <hr class="division-line">

        <SimpleTextInput></SimpleTextInput>
      </section>
  </main>
</template>

<style scoped>
.all-caps{
  text-transform: uppercase;
}

.ri-arrow-down-s-line{
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 90vh;
  font-size: 2rem;
  color: var(--beige);
  cursor: pointer;
  z-index: 3;
  transition: filter .3s cubic-bezier(.25, .8, .25, 1);
}
.ri-arrow-down-s-line:hover{
  filter: drop-shadow(0 0 16px rgba(211, 197, 174, 0.5));
}

.overlay-circle{
  position: absolute;
  bottom: -100%;
  left: -25%;
  z-index: 2;
  border: #C1BBB0 1px solid;
  pointer-events: none;

  width: 150vw;
  height: 1250px;
  border-radius: 100%;

  display: block;
}

.hero{
  position: relative;
}

  .hero-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero p{
  font-size: 1.2rem;
  }

  .hero .button{
    margin-top: 24px;
  }

  .featured-projects{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .project-list{
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 100%;
}

.contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}
.contact-description{
  text-align: center;
}

.division-line{
  width: 25%;
  height: 1px;
  background-color: var(--beige);
  opacity: .5;
  margin: 32px 0;
}
</style>