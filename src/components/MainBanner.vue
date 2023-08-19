<template>
  <div id="main-banner">
    <div class="main-options">
      <ChangeThemeButton />
      <SelectLangs />
    </div>
    <div id="main-banner-title">
      <h1>Bryan Dietrich<br />Bernhardt</h1>
      <h2>{{ $t("DESENVOLVEDOR_FULLSTACK_1") }}<br />{{ $t("DESENVOLVEDOR_FULLSTACK_2") }}</h2>
    </div>
    <div id="main-banner-button">
      <BaseButton
        :label="$t('CONNECT')"
        href="https://github.com/bryandbernhardt/"
        :alt="$t('CONNECT')"
        src="arrow-right-icon.webp"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import ChangeThemeButton from './ChangeThemeButton.vue';
import SelectLangs from './SelectLangs.vue';

export default {
  components: {
    ChangeThemeButton,
    SelectLangs,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.main-options {
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#main-banner {
  width: 100%;
  min-height: 100vh;

  background-image: var(--main-background);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: grid;
  grid-template-rows: 2fr 1fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #main-banner-title {
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      font-family: 'Righteous', cursive;
      line-height: 1;
      font-size: clamp(1rem, -0.6111rem + 5.5556vw, 1.75rem);
      color: #ffff;
    }

    h2 {
      font-family: 'Black Ops One', cursive;
      line-height: 0.8;
      font-size: clamp(2rem, -2.2782rem + 16.3911vw, 4.688rem);
      color: #ffff;
    }
  }

  #main-banner-button {
    width: 60vw;
    align-self: flex-start;

    button {
      color: #ffff;
      max-height: 2rem;
      border-radius: 1rem;
      border: 0;
      background-color: var(--primary-color);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;

      img {
        width: 1.5rem;
      }
    }
  }
}

</style>

<style lang="scss">
.langs-container {
  min-width: 10px;
}
</style>
