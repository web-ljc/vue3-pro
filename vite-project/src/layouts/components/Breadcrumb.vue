<template>
  <el-breadcrumb separator="/" class="p-6">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span
        v-if="item.redirect === 'noRedirect' || index === levelList.length - 1">
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleLink(item)">
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { compile } from 'path-to-regexp'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const levelList = ref(null)
const router = useRouter()
// 当前路由
const route = useRoute()

// 解析路由匹配数组
const getBreadcrumb = () => {
  // 留下只有title的路由
  let matched = route.matched.filter((item) => item.meta && item.meta.title)
  // 首页判断
  const first = matched[0]
  if (first.path !== '/') {
    matched = [{ path: '/', meta: { title: '首页' } }].concat(matched)
  }
  // 拼出最终需要展现跳转数据
  levelList.value = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}

// 手动解析path中存在的参数
const pathCompile = (path) => {
  let toPath = compile(path)
  return toPath(route.params)
}

const handleLink = (item) => {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect)
    return
  }
  router.push(pathCompile(path))
}

// 首次调用
getBreadcrumb()

// 监控route变化
watch(route, getBreadcrumb)
</script>

<style lang="less" scoped>

</style>