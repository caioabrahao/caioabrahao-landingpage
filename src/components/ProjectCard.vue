<template>
<a href="https://www.behance.net/gallery/214767069/My-2024-Portfolio-Caio-Abrahao" target="_blank" class="project-card">
    <div class="project-thumbnail" id="thumbnail-1"></div>
        <div class="project-info">
            <div>
                <h3 class="project-title">2024 Design Portfolio</h3>
                <p class="project-subtitle">A retrospective on my projects of the year</p>
            </div>
        <p class="project-description">A showcase of all my design related projects of 2024, featuring a 
        artistic experiments, graphic and web designs, illustrations and photography. <br>Check it right now
        on my Behance profile or click in this card!</p>
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
  width: 75%;

  transition: all .3s cubic-bezier(.25, .8, .25, 1);
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
  background-color: #2E2E2E;
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