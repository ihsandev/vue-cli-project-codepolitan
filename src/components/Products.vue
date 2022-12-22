<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <main-navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slider="toggleSlider"
    ></main-navbar>
    <price-slider
      :sliderStatus="sliderStatus"
      :maximum.sync="maximum"
    ></price-slider>
    <product-list
      :products="products"
      :maximum="maximum"
      @add-item="addItem"
      @remove-item="deleteItem"
    ></product-list>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";
import MainNavbar from "./Navbar.vue";
export default {
  name: "main-products",
  props: [
    "products",
    "cart",
    "cartQty",
    "cartTotal",
    "maximum",
    "sliderStatus",
    "sliderShow",
  ],
  components: {
    ProductList,
    PriceSlider,
    MainNavbar,
  },
  methods: {
    toggleSlider: function () {
      return this.$emit("toogle");
    },
    addItem: function (item) {
      return this.$emit("add", item);
    },
    deleteItem: function (item) {
      return this.$emit("remove", item);
    },
  },
};
</script>
