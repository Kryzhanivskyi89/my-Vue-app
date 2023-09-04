<script >
  import Button from './components/Button.vue';
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

<template>
 <div :id="$style.app">
    <Button @click="increment">Click me</Button>
    <h1>{{ title }}</h1>
    <DirectivesTest/>
  </div>
</template>



<style  module>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
