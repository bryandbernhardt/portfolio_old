<template>
  <div id="experience-container">
    <h2>Experience</h2>

    <div class="experiences">

      <div class="experience">
        <h4>DEPLOYMENT ANALYST</h4>
        <p class="subtitle">IBR SISTEMAS</p>
        <p>System installation, tax coupon printers,
          digital certificates, tax configuration for issuing
          tax documents and training for customers.
        </p>
      </div>

      <div class="experience">
        <h4>FREELANCER FULL STACK DEVELOPER</h4>
        <p class="subtitle">INCEPTION SURVEY APP</p>
        <p>
          Web system for managing products and research for a drug company.
        </p>
      </div>

      <div class="experience">
        <h4>FULL STACK DEVELOPER</h4>
        <p class="subtitle">MINHA VISISTA</p>
        <p>
          Web and mobile system for team management and external sales.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
