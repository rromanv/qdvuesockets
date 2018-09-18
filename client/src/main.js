import Vue from 'vue'
import VueWebsocket from "vue-websocket";

import App from './App.vue'

Vue.use(VueWebsocket, "ws://localhost:3000");

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
