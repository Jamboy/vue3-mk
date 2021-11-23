<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-22 14:00:53
 * @LastEditTime: 2021-11-22 14:16:01
-->
<template>
  <div class="wrapper">
    <div>
      <button @click="handleGoBalance">去结算</button>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const handleGoBalance = () => {
      console.log(11)
      // router.push({ name: 'OrderConfirm' })
      router.push({ path: '/orderConfirm/shopId=1' })
    }

    return { handleGoBalance }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  bottom: 0;
}
</style>
