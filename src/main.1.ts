import Vue from 'vue';
import App from './App.vue';
import { LogMessages } from './cababilities/LogMessages';
import { Log } from './data/Log';

Vue.config.productionTip = false;

class LogMessagesApp implements LogMessages {
  log(log: Log) {
    console.log(log.message)
  }
}

const LogMessagesInstance = new LogMessagesApp();

new Vue({
  render: h => h(App,
   { props:
    { logMessages: LogMessagesInstance }
    })
  }).$mount("#app");
