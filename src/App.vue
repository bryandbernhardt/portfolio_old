<template>
  <DesktopView v-if="!isMobile"/>
  <MobileView v-else />
</template>

<script>
import { isMobile } from 'mobile-device-detect';
import DesktopView from './pages/DesktopView.vue';
import MobileView from './pages/MobileView.vue';

export default {
  data() {
    return {
      isMobile,
    };
  },

  components: {
    DesktopView,
    MobileView,
  },
};
</script>
