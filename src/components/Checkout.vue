<template>
  <div class="mt-5">
    <h1 class="mb-2">Checkout</h1>
    <table class="table table-hover" v-if="cart.length">
      <caption class="text-right h3">
        <strong>Total:</strong>
        <product-price
          class="d-block text-success font-weight-light"
          :value="Number(cartTotal)"
        ></product-price>
      </caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Qty</th>
          <th scope="col">Price</th>
          <th scope="col">Sub Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group" role="group">
              <button class="btn btn-info" @click="$emit('add', item.product)">
                +
              </button>
              <button
                class="btn btn-danger"
                @click="$emit('delete-item', index)"
              >
                -
              </button>
            </div>
          </td>
          <td>{{ item.product.name }}</td>
          <td>{{ item.qty }}</td>
          <td>
            <product-price :value="Number(item.product.price)"></product-price>
          </td>
          <td>
            <product-price
              :value="Number(item.product.price * item.qty)"
            ></product-price>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center text-muted mt-5" v-else>
      <h3>Data Checkout Belum Ada</h3>
    </div>
    <div class="text-center mt-5">
      <router-link class="btn btn-outline-info" to="/"
        >Back to Shop</router-link
      >
    </div>
  </div>
</template>

<script>
import ProductPrice from "./Price.vue";
export default {
  name: "product-checkout",
  props: ["cart", "cartTotal"],
  components: {
    ProductPrice,
  },
};
</script>
