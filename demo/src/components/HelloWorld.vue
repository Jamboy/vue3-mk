<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-09-10 17:14:30
 * @LastEditTime: 2021-09-10 17:18:05
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
