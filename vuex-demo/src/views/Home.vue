<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div @click="handleClick">{{myName}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed:{
    myName(){
      return this.$store.state.name
    }
  },
  methods: {
    handleClick(){
      this.$store.dispatch('change','ffffffff')
    }
  },
}
</script>
