<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-09-11 10:06:32
 * @LastEditTime: 2021-09-11 10:45:16
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ name }}
  </div>
</template>
<script>
import { computed,toRefs } from 'vue'
import {useStore} from 'vuex';
export default({
  setup() {
    const myName = computed(()=>{
      return 'ff'
    })
    const store = useStore()
    const {name} = toRefs(store.state)
    return { myName,name }
  },
})
</script>

