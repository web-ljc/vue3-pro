import { createRouter, createWebHashHistory } from "vue-router";

// 工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: () => import('views/home.vue')}
  ]
})

export default router
