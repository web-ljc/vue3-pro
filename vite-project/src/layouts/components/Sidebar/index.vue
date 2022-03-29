<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo text-left"
    background-color="#1d215b"
    text-color="#fff"
    active-text-color="#636ef5"
    >
    <!-- caidan -->
    <sidebar-item
      v-for="route in routes"
      :item="route"
      :key="route.path"
      :base-path="route.path"
    />
  </el-menu>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '@/router'

const activeMenu = computed(() => {
  const route = useRoute()
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style lang="less" scoped>
</style>