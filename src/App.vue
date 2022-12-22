<template>
  <div id="app" class="container">
    <router-view
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      :products="products"
      :maximum="maximum"
      :sliderStatus="sliderStatus"
      :sliderShow="sliderShow"
      @add="addToCart"
      @toogle="sliderShow"
      @remove="removeFromCart"
      @delete-item="deleteItemCart"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      products: [],
      maximum: 50,
      sliderStatus: false,
      cart: [],
    };
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        const newProducts = [...data, { isOnCart: false }];
        this.products = newProducts;
      });
  },
  computed: {
    cartQty: function () {
      const total = this.cart.reduce((a, b) => a + b.qty, 0);
      return total;
    },
    cartTotal: function () {
      const total = this.cart.reduce((a, b) => a + b.product.price * b.qty, 0);
      return total;
    },
  },
  methods: {
    sliderShow: function () {
      return (this.sliderStatus = !this.sliderStatus);
    },
    addToCart: function (product) {
      let productIndex;
      const isProductExist = this.cart.filter((item, index) => {
        if (item.product.id === product.id) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });
      if (isProductExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product, qty: 1 });
      }
    },
    removeFromCart: function (product) {
      let productIndex;
      const isProductExist = this.cart.filter((item, index) => {
        if (item.product.id === product.id) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });
      if (isProductExist.length) {
        if (this.cart[productIndex].qty > 1) {
          this.cart[productIndex].qty--;
        } else {
          this.cart.splice(productIndex, 1);
        }
      }
    },
    deleteItemCart: function (index) {
      if (this.cart[index].qty > 1) {
        this.cart[index].qty--;
      } else {
        this.cart.splice(index, 1);
      }
    },
  },
};
</script>
