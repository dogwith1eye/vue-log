<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import { LogMessages, log } from './cababilities/LogMessages';
import { LogType } from './data/Log';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  @Prop() logMessages: LogMessages;

  mounted () {
    log(this.logMessages, LogType.Debug, "App Mounted");
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
