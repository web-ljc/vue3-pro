<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'

const store = useStore()
// 初始化绑定刷新事件
onMounted(() => {
  window.addEventListener('unload', saveState)
})
// 保存状态事件
const saveState = () => {
  window.sessionStorage.setItem('state', JSON.stringify(store.state.base))
}
</script>

<template>
  <router-view></router-view>
</template>
