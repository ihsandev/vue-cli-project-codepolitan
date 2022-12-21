<template>
  <transition-group
    name="fade"
    tag="div"
    @@before-enter="before"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="card mb-3 d-none"
      v-for="(item, index) in showItem"
      :key="item.id"
      :data-index="index"
    >
      <div class="row">
        <div class="col-sm-4">
          <img :src="item.image" :alt="item.name" class="card-img-top" />
        </div>
        <div class="col-sm-8">
          <div class="card-body">
            <h2 class="card-title">
              <product-price :value="Number(item.price)"></product-price>
            </h2>
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-truncate" v-html="item.description"></p>
            <button @click.stop="$emit('remove', item)" class="btn btn-danger">
              -
            </button>
            <button @click.stop="$emit('add', item)" class="btn btn-primary">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import ProductPrice from "./Price.vue";
export default {
  name: "product-list",
  props: ["products", "maximum"],
  components: {
    ProductPrice,
  },
  computed: {
    showItem: function () {
      let max = this.maximum;
      const product = this.products.filter(function (item) {
        return item.price <= Number(max);
      });
      return product;
    },
  },
  methods: {
    before: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className = "card mb-3 d-flex animated fadeInRight";
      }, delay);
    },
    leave: function (el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className = "card mb-3 d-flex animated fadeOutRight";
      }, delay);
    },
  },
};
</script>
