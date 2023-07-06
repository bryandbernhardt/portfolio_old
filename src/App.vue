<template>
  <DesktopView v-if="!isMobile"/>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
import DesktopView from './pages/DesktopView.vue';

export default {
  data() {
    return {
      isMobile,
    };
  },

  components: {
    DesktopView,
  },
};
</script>

<style scoped>

</style>
