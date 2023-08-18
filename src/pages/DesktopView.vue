<template>
  <MainBanner />
  <AboutMeView />
  <ProjectsView />
</template>

<script>
import MainBanner from '../components/MainBanner.vue';
import AboutMeView from './AboutMeView.vue';
import ProjectsView from './ProjectsView.vue';

export default {
  components: {
    MainBanner,
    AboutMeView,
    ProjectsView,
  },
};
</script>
