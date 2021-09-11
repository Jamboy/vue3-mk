<template>
  <div>
    <input v-model="inputValue" />
    <button @click="handleAdd">添加</button>
    <ul>
      <TodoItem v-for="(item,index) in items" :key="index" :item="item"></TodoItem>
      <!-- <li v-for="(item,index) in items" :key="index">{{item}}</li> -->
    </ul>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
import TodoItem from './components/TodoItem'

export default {
  name: 'App',
  components:{
    TodoItem
  },

  setup() {
    const inputValue = ref('')
    const items = reactive([])
    const handleAdd = ()=>{
      items.push(inputValue.value)
    }
    return{
      inputValue,items,handleAdd
    }
  }
}
</script>

<style>
</style>
