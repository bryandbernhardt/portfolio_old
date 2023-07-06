<template>
  <div class="header">
    <BryanLogo
      class="bryan-logo"
      :fontSize="1.5"
    />
    <ChangeThemeButton />
  </div>
  <SelectLangs />
  <BottomMenu />
</template>

<script>
import BottomMenu from '../components/BottomMenu.vue';
import BryanLogo from '../components/BryanLogo.vue';
import ChangeThemeButton from '../components/ChangeThemeButton.vue';
import SelectLangs from '../components/SelectLangs.vue';

export default {
  components: {
    BottomMenu,
    BryanLogo,
    ChangeThemeButton,
    SelectLangs,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
