<template>
  <div>
    <div class="warper">
      <div class="position">
        <span class="iconfont position__icon">&#xe60f;</span>
        深圳市时撒发发发发送到街坊邻居fffffffffffff发呆fasdfasdfasdfsd
        <span class="iconfont position__notice">&#xe603;</span>
      </div>
    </div>
    <div class="docker">
      <span class="docker__item docker__item--active">
        <div class="iconfont">&#xe707;</div>
        <div class="docker__titel">首页</div>
      </span>
      <span class="docker__item">
        <div class="iconfont">&#xe705;</div>
        购物车</span
      >
      <span class="docker__item">
        <div class="iconfont">&#xe708;</div>
        订单</span
      >
      <span class="docker__item">
        <div class="iconfont">&#xe626;</div>
        我的</span
      >
    </div>
  </div>
</template>

<style lang="scss">
@import "../style/viriables";
@import "../style/mixins";
.warper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  background: aqua;
  padding: 0 0.18rem;
}
.position {
  @include ellipsis;
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  font-size: 0.16rem;
  line-height: 0.16rem;
  .position__icon {
    position: relative;
    padding-top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}

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
  border-top: 0.01rem solid #f1f1f1;
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
