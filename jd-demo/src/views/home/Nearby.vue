<!--
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-11-05 11:38:09
 * @LastEditTime: 2021-11-18 14:59:17
-->
<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <ShopInfo v-for="(item,index) in nearbyList"
              :key="index"
              @click="handleShopClick"
              :item="item">
    </ShopInfo>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const res = await get('/api/shop/hot-list')
    if (res?.errno === 0 && res?.data?.length) {
      nearbyList.value = res.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    const router = useRouter()
    getNearbyList()
    const handleShopClick = (e) => {
      console.log('handleShopClick: ', e.id)
      router.push({ name: 'Shop' })
    }
    return { nearbyList, getNearbyList, handleShopClick }
  }
}
</script>
<style lang="scss">
@import '../../../style/viriables';
@import '../../../style/mixins';
.nearby {
  display: flex;
  flex-direction: column;
  align-content: center;
  &__title {
    margin: 0.12rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content_fontcolor;
  }
}
</style>
