<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-22 09:34:45
 * @LastEditTime: 2021-11-22 13:45:41
-->
<template>
  <div class="content">
    <div class="category">
      <div v-for="(item,index) in categories"
           :key="index"
           @click="() => handleCategoryClick(item.tab)"
           :class="{'category__item': true, 'category__item__active': currentTab === item.tab}">{{item.name}}</div>
    </div>
    <div class="product">
      <div class="product__item"
           v-for="item in list"
           :key="item._id">
        <image class="product__item__img"
               :src="item.imgUrl">
        </image>
        <div class="product__item__detail">
          <h4 class="product__item__title">{{item.name}}</h4>
          <p class="product__item__info">月售{{item.sales}}件</p>
          <p class="product__item__price">
            <span class="prodcut__item__yen">&yen;</span>{{item.price}}
            <span class="prodcut__item__origin">&yen;{{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__mius">-</span>0
          <span class="product__number__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from '../utils/request'
import { ref } from 'vue'

const useProductList = () => {
  const categories = [{
    name: '全部商品',
    tab: 'all'
  }, {
    name: '秒杀',
    tab: 'seckill'
  }]
  const list = ref([])
  const currentTab = ref('all')

  const getContent = async (tab) => {
    const res = await get('/api/shop/1/products', {
      tab
    })
    list.value = res.data
    console.log(res.data)
  }

  const handleCategoryClick = (tab) => {
    getContent(tab)
    currentTab.value = tab
    console.log(currentTab.value)
  }

  return { categories, list, currentTab, getContent, handleCategoryClick }
}

export default {
  name: 'Content',
  setup () {
    const { categories, list, currentTab, getContent, handleCategoryClick } = useProductList()
    getContent('all')
    return { list, currentTab, categories, handleCategoryClick }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
  .category {
    overflow-y: scroll;
    width: 0.76rem;
    height: 100%;
    background: $search-bgColor;
    &__item {
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.14rem;
      color: #333;
      &__active {
        background: #fff;
      }
    }
  }

  .product {
    overflow-y: scroll;
    overflow: hidden;
    flex: 1;
    &__item {
      position: relative;
      display: flex;
      width: 100%;
      padding: 0.12rem 0;
      margin: 0 0.12rem;
      border-bottom: 1px solid $search-bgColor;
      &__img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.16rem;
      }
      &__title {
        line-height: 0.2rem;
        margin: 0;
        color: #333;
        font-size: 0.14rem;
      }
      &__sales {
        margin: 0;
      }

      &__price {
        margin: 0;
        line-height: 0.2rem;
        font-size: 0.12rem;
        color: #e93b3b;
      }
      &__yen {
        font-size: 0.12rem;
      }
      &__origin {
        margin-left: 0.06rem;
        line-height: 0.2rem;
        font-size: 0.12rem;
        color: #999;
        text-decoration: line-through;
      }
    }

    &__number {
      position: absolute;
      color: red;
      bottom: 0.12rem;
      right: 0.18rem;
      &__mius,
      &__plus {
        display: inline-block;
        width: 0.2em;
        height: 0.2em;
        border-radius: 50%;
        border-bottom: 0.01rem solid #666;
        text-align: center;
        font-size: 0.2rem;
        line-height: 0.16rem;
      }
    }
  }
}
</style>
