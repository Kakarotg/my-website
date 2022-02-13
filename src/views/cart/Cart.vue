<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
    },
    computed:{
      ...mapGetters(['cartList','cartCount'])
    }
  }
</script>

<style scoped>

</style>
