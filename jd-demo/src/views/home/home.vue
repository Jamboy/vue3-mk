<!--
 * @Description: 首页
 * @Author: Jamboy
 * @Date: 2021-11-04 17:36:00
 * @LastEditTime: 2021-11-04 17:36:00
-->

<template>
  <div>
    <div class="warper">
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
        <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
      </div>
      <div class="icons">
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img
            src="http://www.dell-lee.com/imgs/vue3/超市.png"
            class="icons__item__img"
          />
          <p class="icons__item__desc">超市便利</p>
        </div>
      </div>
      <div class="gap"></div>
      <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item">
          <div class="nearby__item__img__container">
            <img
              class="nearby__item__img__container__img"
              src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
            />
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tags">月售1万+</div>
            <div class="nearby__item__content__tag">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>

        <div class="nearby__item">
          <div class="nearby__item__img__container">
            <img
              class="nearby__item__img__container__img"
              src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
            />
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tags">月售1万+</div>
            <div class="nearby__item__content__tag">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>

        <div class="nearby__item">
          <div class="nearby__item__img__container">
            <img
              class="nearby__item__img__container__img"
              src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
            />
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tags">月售1万+</div>
            <div class="nearby__item__content__tag">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>

        <div class="nearby__item">
          <div class="nearby__item__img__container">
            <img
              class="nearby__item__img__container__img"
              src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
            />
          </div>
          <div class="nearby__item__content">
            <div class="nearby__item__content__title">沃尔玛</div>
            <div class="nearby__item__content__tags">月售1万+</div>
            <div class="nearby__item__content__tag">
              VIP尊享满89元减4元运费券（每月3张）
            </div>
          </div>
        </div>
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

export default { }

<style lang="scss">
@import "../../../style/viriables";
@import "../../../style/mixins";
.warper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  overflow-y: auto;
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
.nearby {
  display: flex;
  flex-direction: column;
  align-content: center;
  &__title {
    margin: 0.12rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content_fontcolor;
  }
  &__item {
    display: flex;
    flex-direction: row;
    height: 0.8rem;
    margin-bottom: 0.2rem;
    &__img__container {
      display: flex;
      align-items: center;
      justify-content: center;
      &__img {
        width: 0.56rem;
        height: 0.56rem;
        padding-right: 0.15rem;
      }
    }

    &__content {
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
  }
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
