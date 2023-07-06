<template>
  <header>
    <BryanLogo />

    <nav class="nav">
      <ul class="desktop-nav-itens">
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

    <!-- Hamburger icon -->
    <input type="checkbox" name="side-menu" class="side-menu" id="side-menu" />
    <label for="side-menu" class="btn-menu">
      <span class="btn-menu-line"></span>
    </label>

    <div class="nav-mobile">
      <ul class="mobile-nav-itens">
        <li><a href="#">{{ $t('NAVIGATOR.HOME') }}</a></li>
        <li><a href="#">{{ $t('NAVIGATOR.ABOUT') }}</a></li>
        <li><a href="#">{{ $t('NAVIGATOR.EXPERTISE') }}</a></li>
        <li><a href="#">{{ $t('NAVIGATOR.EXPERIENCE') }}</a></li>
        <li><a href="#">{{ $t('NAVIGATOR.CONTACT') }}</a></li>
      </ul>

      <div class="nav-end-mobile">
        <ChangeThemeButton />
        <SelectLangs />
      </div>
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
    SelectLangs,
  },

};
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

  // NAVIGATORS
  .desktop-nav-itens {
    display: flex;
    padding: 1rem;
    gap: 1rem;

    a {
      padding: .5rem;
    }

    li, a {
      font-weight: bold;
      color: var(--default-text);
    }
  }

  .mobile-nav-itens {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      padding: .5rem;
    }

    li, a {
      font-weight: bold;
      color: var(--default-text);
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

  .btn-menu {
    cursor: pointer;
    float: right;
    padding: 1rem;

    .btn-menu-line {
      top: 50%;
      background-color: var(--default-text);
      display: block;
      height: 0.2rem;
      position: relative;
      width: 2rem;
    }
    .btn-menu-line::before,
    .btn-menu-line::after {
      background-color: var(--default-text);
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: all .2s ease-out;
      width: 100%;
    }
    .btn-menu-line::before {
      top: 0.5rem;
    }
    .btn-menu-line::after {
      top: -0.5rem;
    }
  }

  .btn-menu,
  .side-menu,
  .nav-mobile {
    display: none;
  }

  @media (max-width: 53rem) {
    .nav,
    .header-end {
      display: none !important;
    }

    .btn-menu {
      display: block;
    }

    .side-menu:checked ~ .nav-mobile{
      height: calc(100% - 9.4rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      right: 0;
      top: 9.4rem;
      padding: 0 2rem;
      min-width: 30%;

      .nav-end-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
      }
    }
    .side-menu:checked ~ .btn-menu .btn-menu-line {
      background: transparent;
    }
    .side-menu:checked ~ .btn-menu .btn-menu-line::before {
      transform: rotate(-45deg);
      top:0;
    }
    .side-menu:checked ~ .btn-menu .btn-menu-line::after {
      transform: rotate(45deg);
      top:0;
    }
  }

</style>
