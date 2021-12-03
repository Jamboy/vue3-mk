<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-11-30 16:32:33
 * @LastEditTime: 2021-11-30 18:14:01
-->
<template>
  <div>
    {{count}}
    <button type="button"
            @click="increment">+11</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    title: {
      type: String,
      default: "111"
    },
  },

  setup (props) {
    console.log('props: ', props)
    let count = ref(100)

    const increment = () => {
      count.value += 1
    }

    return { count, increment }
  }
}
</script>

<style lang="scss" scoped>
</style>