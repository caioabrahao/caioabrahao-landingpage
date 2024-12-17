<script setup>
import Header from './components/Header.vue';
import Button from './components/Button.vue';
import GlassBackground from './components/overlays/GlassBackground.vue';
import GrainOverlay from './components/overlays/GrainOverlay.vue';
import ProjectCard from './components/ProjectCard.vue';
</script>


<template>
  <GrainOverlay></GrainOverlay>
  <GlassBackground></GlassBackground>

  <Header></Header>
  <main>
    <section class="section hero">

        <div class="hero-text">
          <h1 class="title-1">Caio Abrahão</h1>
          <p>GRAPHIC DESIGNER | FRONT END DEVELOPER</p>
          <Button class="button" btn-label="About Me!" href="#"></Button>
        </div>
      </section>

      <section class="section featured-projects">
        <h2 class="title-2">featured project</h2>

        <div class="project-list">
          <ProjectCard></ProjectCard>
        </div>

        <Button btn-label="Show More" href="#" btn-style="secondary"></Button>
      </section>
  </main>
</template>


<style scoped>
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
}
</style>
