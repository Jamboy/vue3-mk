<!--
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-12-01 11:46:13
 * @LastEditTime: 2021-12-01 11:54:07
-->
<script>
import { h } from 'vue'

export default {
  data () {
    return {
      count: 0
    }
  },
  render () {
    return h("h2", null, [`计数器:${this.count}`,
    h('button', { onClick: () => { this.count++ } }, "+1"),
    h('button', { onClick: () => { this.count-- } }, "-1")
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>