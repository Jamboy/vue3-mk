<template>
  <div>
    <div class="warper">
      1
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
.warper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: aqua;
}

.docker {
  display: flex;
  position: absolute;
  padding: 0 0.18rem;
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid #f1f1f1;

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
    font-size: .2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
