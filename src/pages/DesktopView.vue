<template>
  <MainBanner />
  <AboutMeView />
  <ProjectsView />
  <ExperienceView />
  <ConnectWithMe />
</template>

<script>
import MainBanner from '../components/MainBanner.vue';
import AboutMeView from './AboutMeView.vue';
import ProjectsView from './ProjectsView.vue';
import ExperienceView from './ExperienceView.vue';
import ConnectWithMe from './ConnectWithMe.vue';

export default {
  components: {
    MainBanner,
    AboutMeView,
    ProjectsView,
    ExperienceView,
    ConnectWithMe,
  },
};
</script>
