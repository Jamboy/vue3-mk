<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-18 11:10:34
 * @LastEditTime: 2021-11-20 15:38:52
-->
<template>
  <div :class="{'nearby__item':true, 'nearby__item__border' : showBorder}"
       @click="handleClick">
    <div class="nearby__item__img__container">
      <img class="nearby__item__img__container__img"
           :src="item.imgUrl" />
    </div>
    <div class="nearby__item__content">
      <div class="nearby__item__content__title">{{item.name}}</div>
      <div class="nearby__item__content__tags">月售{{item.sales}}+</div>
      <div class="nearby__item__content__tag">{{item.slogan}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  name: 'ShopInfo',
  // emits: ['click'],
  setup (props, { emit }) {
    const handleClick = () => {
      console.log('handleClick: ')
      emit('click', { id: props.item._id })
    }
    return { handleClick }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins';
@import '../../style/viriables';
.nearby__item {
  display: flex;
  flex-direction: row;
  height: 0.8rem;
  margin-bottom: 0.2rem;
  padding-bottom: 0.1rem;
  &__border {
    border-bottom: 1px solid $search-bgColor;
  }
}
.nearby__item__img__container {
  display: flex;
  align-items: center;
  justify-content: center;
  &__img {
    width: 0.56rem;
    height: 0.56rem;
    padding-right: 0.15rem;
  }
}
.nearby__item__content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &__title {
    font-size: 0.16rem;
    line-height: 0.22rem;
  }
  &__tags {
    font-size: 0.12rem;
    line-height: 0.18rem;
  }
  &__tag {
    color: red;
  }
}
</style>
