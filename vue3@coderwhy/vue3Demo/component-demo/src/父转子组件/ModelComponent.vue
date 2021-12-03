<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-11-29 10:45:47
 * @LastEditTime: 2021-11-29 10:59:21
-->
<template>
  <input type="text"
         :value="title"
         @input="updateTitle">
</template>

<script>
export default {
  emits: ['update:title'],
  props: ['title'],
  methods: {
    updateTitle (e) {
      this.$emit('update:title', e.target.value)
    }
  },

}
</script>

<style lang="scss" scoped>
</style>