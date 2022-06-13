<template>
  <div class="fa-div">
    <div> {{ name }} {{ price }} </div>
    <!-- <teleport to="body">
      我是一个弹框
    </teleport> -->
    <!-- <Suspense>
      <tenplate v-slot:default>
        <Child />
      </tenplate>
      <tenplate v-slot:fallback>
        <h3>loading...</h3>
      </tenplate>
    </Suspense> -->
  </div>
</template>
 
<script>
// 同步引入子组件，页面加载会等待子组件
// import Child from './01_ref&reactive.vue'

import { ref, toRefs, reactive, defineAsyncComponent } from 'vue'

// 异步引入子组件，父级页面会先渲染
// const Child = defineAsyncComponent(() => import('./01_ref&reactive.vue'))

export default {
  name: 'Stu',
  setup() {
    let car = reactive({
      name: 'car',
      price: '20w'
    })

    return {
      ...toRefs(car)
    }
  },
}

/* 
  Composition API 优势
    - 可以更加优雅的组织代码，函数。让相关功能的代码更加有序的组织在一起
  
  teleport组件
    - 将组件html结构移动到制定位置

  suspens组件
    - 子组件可以异步加载
    - 需要配置好 default 和 fallback
*/
</script>
