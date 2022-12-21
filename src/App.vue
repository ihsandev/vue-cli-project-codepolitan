<template>
  <div id="app" class="container mt-5">
    <h1>Ahad Store</h1>
    <price-slider
      :sliderStatus="sliderStatus"
      :maximum.sync="maximum"
    ></price-slider>
    <product-list :products="products" :maximum="maximum"></product-list>
  </div>
</template>

<script>
import PriceSlider from "./components/PriceSlider.vue";
import ProductList from "./components/ProductList.vue";
export default {
  name: "App",
  data: function () {
    return {
      products: [],
      maximum: 50,
      sliderStatus: true,
    };
  },
  components: {
    ProductList,
    PriceSlider,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        const newProducts = [...data, { isOnCart: false }];
        this.products = newProducts;
      });
  },
};
</script>
