<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-05 11:34:55
 * @LastEditTime: 2021-11-05 11:36:17
-->
<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe60f;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position__notice">&#xe603;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe6ac;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner__img"
         src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
  </div>
  <div class="icons">
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img src="http://www.dell-lee.com/imgs/vue3/超市.png"
           class="icons__item__img" />
      <p class="icons__item__desc">超市便利</p>
    </div>
  </div>
  <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart'
}
</script>
<style lang='scss'>
@import '../../../style/viriables';
@import '../../../style/mixins';
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

.search {
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  margin-bottom: 0.12rem;

  .iconfont {
    font-size: 0.16rem;
    display: inline-block;
    padding-right: 0.1rem;
    padding-left: 0.16rem;
  }

  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}

.banner {
  // 防止图片抖动，计算图片高宽比
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%; //屏幕宽的25.4% 就是图片的高度
  &__img {
    width: 100%;
  }
  margin-bottom: 0.2rem;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 20%;
    &__img {
      margin: 0 auto;
      display: block;
      width: 0.4rem;
      height: 0.4rem;
    }
    &__desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-fontcolor;
    }
  }
}

.gap {
  height: 0.1rem;
  background: &content-bgColor;
  margin: 0 -0.18rem;
}
</style>
