<template>
  <section class="app-main">
    <!-- 内部应该显示子路由页面信息 -->
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
            <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
