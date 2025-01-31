<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.from('.project-card', { duration: 1, opacity: 0, y: 50, delay: .2, stagger: 0.2 });
  gsap.from('.title-2', { duration: 1, opacity: 0, x: -50 });
});
</script>


<template>
<main>
    <section class="section portfolio">
        <h1 class="title-2">highlight creations</h1>

        <div class="project-list">
            <ProjectCard class="project-card"
            proj-link="https://www.behance.net/gallery/214767069/My-2024-Portfolio-Caio-Abrahao"
            proj-title="2024 Design Portfolio"
            proj-subtitle="A retrospective on my projects of the year"
            proj-description="A showcase of all my design related projects of 2024, featuring a 
                        artistic experiments, graphic and web designs, illustrations and photography. <br>Check it right now
                      on my Behance profile or click in this card!"
            proj-thumbnail-url="/thumbnails/2024portfolio-thumb.png"></ProjectCard>

            <ProjectCard class="project-card"
            proj-link="https://the-render-frame.vercel.app/"
            proj-title="RENDER FRAME"
            proj-subtitle="A 3d website made using three.js"
            proj-description="A showcase of all my design related projects of 2024, featuring a 
                        artistic experiments, graphic and web designs, illustrations and photography. <br>Check it right now
                      on my Behance profile or click in this card!"
            proj-thumbnail-url="/thumbnails/renderframe-thumb.png"></ProjectCard>

            <ProjectCard class="project-card"
            proj-link="https://github.com/caioabrahao/underfabner-datapack"
            proj-title="FABNER: UNDERNEATH"
            proj-subtitle="A minecraft custom world generation datapack"
            proj-description="A showcase of all my design related projects of 2024, featuring a 
                        artistic experiments, graphic and web designs, illustrations and photography. <br>Check it right now
                      on my Behance profile or click in this card!"
            proj-thumbnail-url="/thumbnails/underfabner-thumb.png"></ProjectCard>
        </div>
    </section>
</main>
    
</template>


<style scoped>
.portfolio{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10% 0;

  gap: 64px;

  height: fit-content;
}

.project-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
}

</style>