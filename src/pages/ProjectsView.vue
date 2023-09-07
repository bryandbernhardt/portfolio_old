<template>
  <div id="projects-view">
    <ProjectSection
      class="project-section"
      title="MINHA VISITA APP"
      :description="$t('MINHA_VISITA.TEXT')"
      imageSrc="mv20.webp"
      imageAlt="Minha Visita App"
      link="https://minhavisita.app/"
      :label="$t('MINHAVISITA.VER')"
    />
    <ProjectSection
      class="project-section"
      title="CHARMING FOX"
      :description="$t('CHARMING_FOX.TEXT')"
      imageSrc="charmingfox.webp"
      imageAlt="Charming Fox"
      link="https://github.com/bryandbernhardt/PI-VB-frontend"
      :label="$t('CHARMINGFOX.VER')"
    />
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
