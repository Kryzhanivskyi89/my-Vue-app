<!-- <script >
import Button from './components/shared/Button.vue';
import DirectivesTest from './components/DirectivesTest.vue';
import ApartmentsFilterForm from './components/apartment/ApartmentsFilterForm.vue';

export default {
  name: 'App',
  components: {
    Button,
    DirectivesTest,
    ApartmentsFilterForm
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
 <div id="app">
    <Container>
      <ApartmentsFilterForm
      class="apartsments-filter"
      @submit="filter"
      />
    </Container>
    <p v-if="!filteredApartvents.length"></p>
    <AparthmentsList v-else :
  </div>
</template> -->





<template>
    <div id="app">
    <Notifications />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/Footer';
import AppHeader from './components/header';
import Notifications from './components/notifications';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    Notifications,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>


<!-- 
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
