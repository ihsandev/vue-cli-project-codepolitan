import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import MainProducts from "./components/Products.vue";
import ProductCheckout from "./components/Checkout.vue";

library.add(faShoppingCart, faDollarSign);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: MainProducts,
    },
    {
      path: "/checkout",
      component: ProductCheckout,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
