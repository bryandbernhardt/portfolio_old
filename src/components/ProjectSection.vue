<template>
  <div class="project-section">
    <div class="image">
      <img :src="imageSrc" :alt="imageAlt" :srcset="imageSrc" width="270" height="270" />
    </div>
    <div class="project-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <BaseButton
        :label="label"
        :href="link"
        :alt="$t('FLECHAS.FLECHA_DIREITA')"
        src="arrow-right-icon.webp"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'ProjectSection',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },

  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.project-section {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .image {
    width: 50%;
    display: flex;
    flex-direction: column;

    img {
      align-self: center;
    }
  }

  .project-info {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (orientation: portrait) or (max-width: 760px) {
  .project-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .image {
      width: 100%;
      display: flex;
      flex-direction: column;

    img {
      align-self: center;
    }
  }

    .project-info {
      width: 70%;
    }
  }
}
</style>
