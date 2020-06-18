import Vue from "vue";
import VueCompositionApi from "@vue/composition-api"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueCompositionApi);
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.component("svg-ico",{
  template:`<div></div>`,
  data(){
    return{
      msg:"手把手撸码"
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
