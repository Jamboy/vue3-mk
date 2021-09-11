/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-09-11 10:06:32
 * @LastEditTime: 2021-09-11 10:39:39
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'jambo'
  },
  mutations: {
    change(state,parm) {
      console.log('mutations: ')
      state.name = parm
    }
  },
  actions: {
    change(store,parm) {
      console.log('change: ',parm);
      store.commit('change',parm)
    }
  },
  modules: {

  }
})
