<!--
 * @Description: 弹窗组件
 * @Author: Jamboy
 * @Date: 2021-11-17 10:43:03
 * @LastEditTime: 2021-11-17 14:26:37
-->
<template>
  <div class="toast">
    {{msg}}
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['msg']
}

export const userToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMsg: ''
  })

  const showToast = (msg) => {
    toastData.show = true
    toastData.toastMsg = msg
    setTimeout(() => {
      toastData.show = false
      toastData.toastMsg = ''
    }, 2000)
  }

  const { show, toastMsg } = toRefs(toastData)
  return { show, toastMsg, showToast }
}
</script>
<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
}
</style>
