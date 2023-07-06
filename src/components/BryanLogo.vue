<template>
  <h1 :style="{
    fontSize: fontSize + 'rem',
    lineHeight: fontSize - 0.2 + 'rem'
  }">Bryan <br> Dietrich <br> Bernhardt</h1>
</template>

<script>
export default {
  props: {
    fontSize: Number,
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');

  h1 {
    display:inline-block;
    font-family: 'Nunito', sans-serif;
    line-height: 1.8rem;
    font-weight: 700;
    color: var(--default-text);
  }
</style>
