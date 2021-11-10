import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const options = {
  confirmButtonColor: "#0f2651",
  cancelButtonColor: "#aaa",
};
Vue.use(VueSweetalert2, options);

import "./assets/css/animate.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBath,
  faWind,
  faWifi,
  faDice,
  faSearch,
  faHotel,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBath,
  faWind,
  faWifi,
  faDice,
  faSearch,
  faHotel,
  faCheckCircle,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
