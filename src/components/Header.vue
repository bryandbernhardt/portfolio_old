<template>
  <header>
    <BryanLogo />

    <nav>
      <ul>
        <li><a href="#">{{ $t('NAVIGATOR.HOME') }}</a></li>
        <li><a href="#">{{ $t('NAVIGATOR.ABOUT') }}</a></li>
        <li><a href="#">{{ $t('NAVIGATOR.EXPERTISE') }}</a></li>
        <li><a href="#">{{ $t('NAVIGATOR.EXPERIENCE') }}</a></li>
        <li><a href="#">{{ $t('NAVIGATOR.CONTACT') }}</a></li>
      </ul>
    </nav>
    
    <div class="header-end">
      <ChangeThemeButton />
      <SelectLangs />
    </div>
    
  </header>
</template>

<script>
import BryanLogo from './BryanLogo.vue';
import ChangeThemeButton from './ChangeThemeButton.vue';
import SelectLangs from './SelectLangs.vue';

export default {
  components: {
    BryanLogo,
    ChangeThemeButton,
    SelectLangs
  },
 
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;

    .header-end {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    padding: 1rem;
    gap: 1rem;

    a {
      padding: .5rem;
    }

    li, a {
      font-weight: bold;
      color: var(--vt-c-white-green);
    }
  }

  .navigator:hover {
    li, a {
      color: var(--vt-c-white-green);
      filter: brightness(60%);
    }

    li:hover, a:hover {
      transition: .5s;
      color: var(--vt-c-white-green);
      filter: brightness(100%);
    }
  }

</style>