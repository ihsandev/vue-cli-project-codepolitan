<template>
  <nav class="navbar sticky-top navbar-light bg-light">
    <a class="navbar-brand" href="#">Ahad Store</a>
    <div class="d-flex">
      <button class="btn btn-warning mr-2" @click="$emit('toggle-slider')">
        <font-awesome-icon icon="dollar-sign" class="mx-2"></font-awesome-icon>
      </button>
      <div class="dropdown" v-if="cart.length > 0">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-success dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            id="dropdownCart"
            aria-expanded="false"
          >
            <span class="badge badge-pill badge-warning">{{ cartQty }}</span>
            <font-awesome-icon
              icon="shopping-cart"
              class="mx-2"
            ></font-awesome-icon>
            <product-price :value="Number(cartTotal)"></product-price>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownCart"
          >
            <div v-for="(item, index) in cart" :key="index">
              <div
                class="dropdown-item-text text-nowrap text-rigth"
                type="button"
              >
                <span
                  class="badge badge-pill badge-warning align-text-top mr-1"
                  >{{ item.qty || 0 }}</span
                >
                {{ item.product.name }}
                <b>{{ (item.product.price * item.qty) | currencyFormat }}</b>
              </div>
            </div>
            <div class="text-right mt-2 mr-1">
              <router-link class="btn btn-outline-info" to="/checkout"
                >Checkout</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ProductPrice from "./Price.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "main-navbar",
  props: ["cart", "cartQty", "cartTotal"],
  components: {
    ProductPrice,
    FontAwesomeIcon,
  },
  filters: {
    currencyFormat: function (value) {
      return "Rp." + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>
