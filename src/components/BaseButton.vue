<template>
  <a :href="href" :target="target" :rel="rel">
    <button>
      {{ label }}
      <img :src="src" :alt="alt">
    </button>
  </a>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
      default: '_blank',
    },
    rel: {
      type: String,
      required: false,
      default: 'external',
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
