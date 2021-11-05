<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-05 11:38:09
 * @LastEditTime: 2021-11-05 11:39:11
-->
<template>
      <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <div class="nearby__item">
          <div class="nearby__item__img__container">
            <img class="nearby__item__img__container__img"
                 src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
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
            <img class="nearby__item__img__container__img"
                 src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
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
            <img class="nearby__item__img__container__img"
                 src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
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
            <img class="nearby__item__img__container__img"
                 src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
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
</template>
<script>
export default {
  name: 'Nearby'
}
</script>
<style lang="scss">
@import '../../../style/viriables';
@import '../../../style/mixins';
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
</style>
