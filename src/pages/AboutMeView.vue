<template>
  <div id="about-me">
    <div id="about-me-title">
      <h2>{{ $t("ABOUT_ME.TITLE") }}</h2>
      <p>{{ $t("ABOUT_ME.TEXT") }}</p>
    </div>
    <div id="go-to-portfolio">
      <h4>{{ $t("MY_PORTFOLIO") }}</h4>
      <img
        src="@/assets/images/arrow-buttom.svg"
        :alt="$t('MY_PORTFOLIO')"
        srcset="@/assets/images/arrow-buttom.svg"
        width="30"
        height="30"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about-me {
  display: grid;
  grid-template-rows: 4fr 1fr;
  justify-items: center;

  width: 100%;
  min-height: 100vh;
  padding: 2rem;

  background-image: var(--about-me-background);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  #about-me-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #go-to-portfolio {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    p {
      font-weight: bold;
      color: var(--primary-color);
    }

    img {
      width: 2.5rem;
    }
  }
}
</style>
