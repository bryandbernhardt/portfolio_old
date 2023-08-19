<template>
  <MainBanner />
  <AboutMeView />
  <ProjectsView />
  <ExperienceView />
</template>

<script>
import MainBanner from '../components/MainBanner.vue';
import AboutMeView from './AboutMeView.vue';
import ProjectsView from './ProjectsView.vue';
import ExperienceView from './ExperienceView.vue';

export default {
  components: {
    MainBanner,
    AboutMeView,
    ProjectsView,
    ExperienceView,
  },
};
</script>
