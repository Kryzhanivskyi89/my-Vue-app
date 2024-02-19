<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer"></footer>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.footer {
  background: $secondary-color;
  height: 30px;
}
</style>