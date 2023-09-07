<template>
  <div id="experience-container">
    <h2>{{ $t("EXPERIENCE") }}</h2>

    <div class="experiences">

      <div class="experience">
        <h3>{{ $t("DEVELOPMENT_ANALYST.TITLE") }}</h3>
        <p class="subtitle">IBR SISTEMAS</p>
        <p>{{ $t("DEVELOPMENT_ANALYST.TEXT") }}</p>
      </div>

      <div class="experience">
        <h3>{{ $t("FREELANCER.TITLE") }}</h3>
        <p class="subtitle">INCEPTION SURVEY APP</p>
        <p>{{ $t("FREELANCER.TEXT") }}</p>
      </div>

      <div class="experience">
        <h3>{{ $t("FULLSTACK.TITLE") }}</h3>
        <p class="subtitle">MINHA VISITA</p>
        <p>{{ $t("FULLSTACK.TEXT") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-size: clamp(1rem, 0.625rem + 1.2vw, 1.3rem);
  line-height: 1.2;
  color: var(--primary-color);
  font-weight: bold;
}

#experience-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  gap: 2rem;

  .experiences {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}

@media (orientation: portrait) or (max-width: 760px) {
  #experience-container {
    .experiences {
      grid-template-columns: none;
      grid-template-rows: repeat(3, 1fr);
      gap: 5rem;
    }
  }
}
</style>
