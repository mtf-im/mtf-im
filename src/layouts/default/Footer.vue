<template>
<footer class="footer footer-center p-4 text-base-content mt-10">
  <aside>
    <p>{{ $t("footer.copyright.1") }} &copy; {{ currentYear }} MtF.im {{ $t("footer.copyright.2") }}</p>
    <!-- <p>{{ $t("footer.language") }}</p> -->
  </aside>
</footer>
</template>

<script>
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>