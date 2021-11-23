<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-18 10:55:21
 * @LastEditTime: 2021-11-22 14:04:24
-->
<template>
  <div class="wrapper">
    <div class="search">
      <div class="iconfont search__back "
           @click="handleBackClick">&#xe697;</div>
      <div class="search__content">
        <div class="search__content__icon iconfont">&#xe6ac;</div>
        <input class="search__content__input"
               placeholder="请输入商品名称">
      </div>
    </div>
    <ShopInfo :item="item"
              :showBorder="false">
    </ShopInfo>
    <Content></Content>
  </div>
  <BottomTool></BottomTool>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import ShopInfo from '../../components/ShopInfo.vue'
import Content from '../../components/Content.vue'
import BottomTool from '../../components/BottomTool.vue'
export default {
  components: { ShopInfo, Content, BottomTool },
  setup (props, context) {
    const router = useRouter()
    const route = useRoute()
    const item = ref({})
    onMounted(() => {
      console.log(route.params.id)
      const { id } = route.params
      item.value = items.find(item => item._id === id)
    })
    const items = [
      { _id: '1', name: '沃尔玛', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', sales: 10000, expressLimit: 0, expressPrice: 5, slogan: 'VIP尊享满89元减4元运费券' },
      { _id: '2', name: '山姆会员', imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', sales: 10000, expressLimit: 0, expressPrice: 5, slogan: 'VIP尊享满89元减4元运费券' }
    ]

    const handleBackClick = () => {
      router.back()
    }
    return {
      item, handleBackClick
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../style/viriables';
.wrapper {
  padding: 0 0.18rem;
  .search {
    margin: 0.2rem 0;
    height: 0.32rem;
    display: flex;
    line-height: 0.32rem;
    &__back {
      font-size: 0.32rem;
      padding-left: 0;
    }
    &__content {
      flex: 1;
      background: $search-bgColor;
      border-radius: 0.16rem;
      line-height: 0.32rem;
      display: flex;
      &__icon {
        width: 0.3rem;
        text-align: center;
      }
      &__input {
        display: block;
        flex: 1;
        background: none;
        border: none;
        outline: none;
        height: 0.32rem;
        padding-right: 0.2rem;
        &::placeholder {
          color: #666;
          font-size: 0.14rem;
        }
      }
    }
  }
}
</style>
