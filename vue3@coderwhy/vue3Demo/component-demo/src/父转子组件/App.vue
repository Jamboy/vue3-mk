<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-11-29 10:10:46
 * @LastEditTime: 2021-11-30 16:01:51
-->
<template>
  <div>
    <h2>{{bookTitle}}</h2>
    <model-component v-model:title="bookTitle"> </model-component>
  </div>
</template>
<script>
import ModelComponent from './ModelComponent'
export default {
  components: { ModelComponent },
  data () {
    return {
      bookTitle: '测速'
    }·
  },
}
</script>
