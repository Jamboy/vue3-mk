<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-22 09:34:45
 * @LastEditTime: 2021-11-22 11:08:36
-->
<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item__active">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
    </div>
    <div class="product">
      <div class="product__item">
        <image class="product__item__img"
               src="http://www.dell-lee.com/imgs/vue3/near.png">
        </image>
        <div class="product__item__detail">
          <h4 class="product__item__title">番茄</h4>
          <p class="product__item__info">月售10件</p>
          <p class="product__item__price">
            <span class="prodcut__item__yen">&yen;</span>33.6
            <span class="prodcut__item__origin">&yen;66.6</span>
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
export default {

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
