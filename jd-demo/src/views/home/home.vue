<!--
 * @Description: 首页
 * @Author: Jamboy
 * @Date: 2021-11-04 17:36:00
 * @LastEditTime: 2021-11-05 11:42:19
-->

<template>
  <div class="warper">
    <StaticPart></StaticPart>
    <Nearby></Nearby>
  </div>
  <Docker></Docker>
</template>
<script>
import Nearby from './Nearby.vue'
import StaticPart from './StaticPart'
import Docker from './Docker'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>

<style lang="scss">
@import '../../../style/viriables';
@import '../../../style/mixins';
.warper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  overflow-y: auto;
}
</style>
