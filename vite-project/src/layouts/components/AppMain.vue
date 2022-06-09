<template>
  <section class="app-main">
    <!-- 内部应该显示子路由页面信息 -->
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped>
.app-main {
  height: 100%;
  padding: 12px;
  background-color: #fff;
}
</style>