<template>
  <nav class="bottom-menu">
    <a href="">
      <font-awesome-icon icon="fa-solid fa-house" style="color: var(--default-text);" />
    </a>
    <a href="">
      <font-awesome-icon :icon="['fas', 'gear']" style="color: var(--default-text);" />
    </a>
  </nav>
</template>

<style lang="scss" scoped>
.bottom-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background-color: var(--secondary-background);

  a {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
  }
}
</style>
