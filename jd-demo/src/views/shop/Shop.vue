<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-18 10:55:21
 * @LastEditTime: 2021-11-18 14:25:01
-->
<template>
  <div class="wrapper">
    shop
    <ShopInfo :item="item"></ShopInfo>
  </div>
</template>
<script>
import ShopInfo from '../../components/ShopInfo.vue'
export default {
  components: { ShopInfo },
  setup () {
    const item =
      { _id: '1', name: '沃尔玛', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', sales: 10000, expressLimit: 0, expressPrice: 5, slogan: 'VIP尊享满89元减4元运费券' }

    return {
      item
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
}
</style>
