<template>
  <div id="about-me">
    <div id="about-me-title">
      <h2>About Me</h2>
      <p>I'm Bryan, developer and systems analyst,
        my specialty is in Front-End development and I'm working on Full-Stack.</p>
    </div>
    <div id="go-to-portfolio">
      <p>MY PORTFOLIO</p>
      <img
      src="@/assets/images/arrow-buttom.svg"
      alt="go to portfolio"
      srcset="@/assets/images/arrow-buttom.svg"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about-me {
  display: grid;
  grid-template-rows: 4fr 1fr;
  justify-items: center;

  width: 100%;
  height: 100vh;
  padding: 2rem;

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
