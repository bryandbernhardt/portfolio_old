<template>
  <div id="projects-view">
    <ProjectSection
      class="project-section"
      title="MINHA VISITA APP"
      description="System I currently work with as a full stack developer of new features"
      imageSrc="mv20.webp"
      imageAlt="Minha Visita App"
      link="https://minhavisita.app/" />
    <ProjectSection
      class="project-section"
      title="CHARMING FOX"
      description="Full stack web application for selling perfumes
      developed for college study purposes."
      imageSrc="charmingfox.webp"
      imageAlt="Charming Fox"
      link="https://github.com/bryandbernhardt/PI-VB-frontend" />
  </div>
</template>

<script>
import ProjectSection from '../components/ProjectSection.vue';

export default {
  name: 'ProjectsView',
  components: {
    ProjectSection,
  },
};
</script>

<style lang="scss" scoped>
#projects-view {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  .project-section {
    width: 100%;
    height: 50vh;
  }
}

@media (orientation: portrait) or (max-width: 760px) {
  #projects-view {
    .project-section {
      width: 100%;
      min-height: 100vh;
    }
  }
}
</style>
