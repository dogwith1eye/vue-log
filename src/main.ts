import Vue from 'vue';
import App from './App.vue';
import { LogMessages, Logger } from './cababilities/LogMessages';
import { Log } from './data/Log';

Vue.config.productionTip = false;

class LogMessagesApp implements LogMessages {
  log(log: Log) {
    console.log(log.message)
  }
}

const LogMessagesInstance = new LogMessagesApp();
const LoggerInstance = new Logger(LogMessagesInstance)

new Vue({
  render: h => h(App,
   { props:
    { logger: LoggerInstance }
    })
  }).$mount("#app");
