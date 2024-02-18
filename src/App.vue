
<!-- <template>
  <div id="app">
    <Notifications />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template> -->

<template>
  <div :id="$style.app">
    <Button @click="increment">Click me</Button>
    <h1>{{ title }}</h1>
    <DirectivesTest />
  </div>
</template>

<script >
  // import AppFooter from './components/Footer';
  // import AppHeader from './components/header';
  // import Notifications from './components/notifications';

  import Button from './components/shared/Button.vue';
  import DirectivesTest from './components/DirectivesTest.vue';

export default {
  name: 'App',
  components: {
    Button,
    DirectivesTest
  },
  data() {
    return {
      amountOfClicks: 10
    }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },
  methods: {
    increment() {
      this.amountOfClicks += 1
    }
  }
}


</script>


<style  module>
  #app {
    display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
</style>
