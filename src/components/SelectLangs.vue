<template>
  <div class="langs-container">
    <select
      @change="updateLanguage()"
      v-model="$i18n.locale"
      name="langs" id="langs"
      :aria-label="$t('TROCAR_LINGUAGEM')"
    >
      <option v-for="(lang, i) in langs" :key="i" :value="lang[0]">
        {{ lang[1] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectLangs',

  data() {
    return {
      langs: [
        ['en', 'en-US'],
        ['pt', 'pt-BR'],
        ['es', 'es-AR'],
      ],
    };
  },

  mounted() {
    if (sessionStorage.getItem('locale')) {
      this.$i18n.locale = sessionStorage.getItem('locale');
    } else {
      sessionStorage.setItem('locale', this.$i18n.locale);
    }
  },

  methods: {
    updateLanguage() {
      sessionStorage.setItem('locale', this.$i18n.locale);
    },
  },
};

</script>
