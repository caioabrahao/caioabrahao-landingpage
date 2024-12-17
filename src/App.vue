<script setup>
import Header from './components/Header.vue';
import Button from './components/Button.vue';
import GlassBackground from './components/overlays/GlassBackground.vue';
import GrainOverlay from './components/overlays/GrainOverlay.vue';
import ProjectCard from './components/ProjectCard.vue';
import SocialLinks from './components/SocialLinks.vue';
import SimpleTextInput from './components/SimpleTextInput.vue';
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
          <ProjectCard
           proj-link="https://www.behance.net/gallery/214767069/My-2024-Portfolio-Caio-Abrahao#"
           proj-title="2024 Design Portfolio"
           proj-subtitle="A retrospective on my projects of the year"
           proj-description="A showcase of all my design related projects of 2024, featuring a 
                artistic experiments, graphic and web designs, illustrations and photography. <br> Check it right now
              on my Behance profile or click in this card!">
          </ProjectCard>
        </div>

        <Button btn-label="Show More" href="#" btn-style="secondary"></Button>
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
