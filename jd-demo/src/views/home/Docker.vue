<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-05 11:40:29
 * @LastEditTime: 2021-11-09 14:34:15
-->
<template>
  <div class="docker">
    <span v-for="(item, index) in dockerList"
          :class="{ docker__item: true, 'docker__item--active': index === 0 }"
          :key="index">
      <div class="iconfont"
           v-html="item.icon"></div>
      <div class="docker__titel">{{ item.title }}</div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      {
        icon: '&#xe707;',
        title: '首页'
      },
      {
        icon: '&#xe705;',
        title: '购物车'
      },
      {
        icon: '&#xe708;',
        title: '订单'
      },
      {
        icon: '&#xe603;',
        title: '我的'
      }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss">
@import '../../../style/viriables';
@import '../../../style/mixins';
.docker {
  color: $content-fontcolor;
  display: flex;
  position: absolute;
  padding: 0 0.18rem;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid &content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }

  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
