<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-05 11:38:09
 * @LastEditTime: 2021-11-10 15:24:31
-->
<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item"
         v-for="(item,index) in nearbyList"
         :key="index">
      <div class="nearby__item__img__container">
        <img class="nearby__item__img__container__img"
             :src="item.url" />
      </div>
      <div class="nearby__item__content">
        <div class="nearby__item__content__title">{{item.title}}</div>
        <div class="nearby__item__content__tags">{{item.tags}}</div>
        <div class="nearby__item__content__tag">{{item.tag}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        url: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        title: '沃尔玛',
        tags: '月售1万+',
        tag: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        title: '沃尔玛1',
        tags: '月售1万+',
        tag: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        title: '沃尔玛2',
        tags: '月售1万+',
        tag: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        title: '沃尔玛3',
        tags: '月售1万+',
        tag: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        title: '沃尔玛4',
        tags: '月售1万+',
        tag: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { nearbyList }
  }
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
