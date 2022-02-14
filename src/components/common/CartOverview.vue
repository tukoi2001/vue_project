<template>
  <div>
    <div class="cart-dropdown-block">
      <div class="single-cart-block">
        <div class="cart-product" v-for="item in items" :key="item.id">
            <a href="" class="image">
            <img :src="require(`@/assets/images/products/${item.image}`)" alt="" />
          </a>
          <div class="content">
            <h3 class="title">
              <a href=""
                >{{ item.name }}</a>
            </h3>
            <p class="price"><span class="qty">{{item.qty}} ×</span> £87.34</p>
            <button class="cross-btn" @click.prevent="actionDeleteItem(item.id)"><b-icon icon="trash-fill"></b-icon></button>
          </div>
        </div>
      </div>
      <div class="single-cart-block">
        <div class="btn-block">
          <router-link to="/cart" class="btn"
            >View Cart <b-icon class="btn-icon" icon="chevron-right"></b-icon></router-link>
          <router-link to="/checkout" class="btn btn--primary"
            >Check Out <b-icon class="btn-icon" icon="chevron-right"></b-icon></router-link>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  name: "CartOverview",
  computed: {
    ...mapState('cart', [
      'items'
    ])
  },
  methods: {
    ...mapActions('cart', [
      'actionInitItems',
      'actionDeleteItem'
    ])
  },
  mounted() {
    this.actionInitItems();
  }
};  
</script>

<style scoped src="@/assets/css/components/cart/CartOverview.css">

</style>
