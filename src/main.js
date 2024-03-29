import Vue from "vue";

import App from "./App.vue";
import i18n from "./plugins/i18n";
import "./assets/tailwind.css";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
    i18n,
    store,
    render: h => h(App),
}).$mount("#app");
