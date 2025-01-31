<script setup>

const props = defineProps({
    projLink: {
    type: String,
    default: '#'
  },
    projTitle: {
    type: String,
    default: 'Project Title'
  },
    projSubtitle: {
    type: String,
    default: 'Project Subtitle'
  },
    projDescription: {
    type: String,
    default: 'Project Description'
  },
    projThumbnailUrl: String,
})
</script>

<template>
<a :href="props.projLink" target="_blank" class="project-card">
    <div class="project-thumbnail" :style="{'--thumbnailURL': projThumbnailUrl ? `url(${projThumbnailUrl})` : 'none'}"></div>
      <div class="project-info">
          <div>
              <h3 class="project-title">{{ projTitle }}</h3>
              <p class="project-subtitle">{{ projSubtitle }}</p>
          </div>
        <p class="project-description"><span v-html="projDescription"></span></p>
      </div>
</a>
</template>

<style scoped>
.project-card{
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;

  background: linear-gradient(25deg, #1C1C1C, #2E2E2E);
  color: var(--beige);
  text-decoration: none;
  border: rgba(211, 197, 174, .3) solid 1px;
  box-shadow: 
    -4px 4px 16px rgb(165, 165, 165, .1) inset,
    4px -4px 16px rgb(165, 165, 165, .1) inset,
    0 4px 30px rgba(0, 0, 0, 0.1);

  padding: 24px;
  width: 70%;

  transition: border .3s cubic-bezier(.25, .8, .25, 1), filter .3s cubic-bezier(.25, .8, .25, 1);
}
.project-card:hover{
  border: rgba(211, 197, 174, 0.7) solid 1px;
  filter: drop-shadow(0 0 8px rgba(211, 197, 174, 0.1));
}

.project-card a{
  text-decoration: none;
  color: var(--beige);
}

.project-thumbnail{
  background: #2E2E2E no-repeat center center;
  background-image: var(--thumbnailURL);
  background-size: cover;
  height: 200px;
  aspect-ratio: 16/9;
  opacity: .7;
}

.project-info{
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.project-title{
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
}
.project-subtitle{
  font-size: 1rem;
  opacity: .5;
  text-transform: uppercase;
}
.project-description{
  font-size: 1rem;
}
</style>