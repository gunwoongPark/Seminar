import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./plugins/vue-masonry";

import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.config.productionTip = false;

Vue.use(VueFbCustomerChat, {
  page_id: 181759373588767, //  change 'null' to your Facebook Page ID,
  theme_color: "#333333", // theme color in HEX
  locale: "ko_KR", // default 'en_US'
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
