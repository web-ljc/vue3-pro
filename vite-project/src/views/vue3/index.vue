<template>
  <el-collapse v-model="state.activeNames" class="text-left">
    <el-collapse-item
      v-for="(item, index) in state.stuData"
      :key="index"
      :title="item.title"
      :name="index"
    >
      <div>{{ item.con }}</div>
    </el-collapse-item>
  </el-collapse>
  <comp ref="compRef" :msg="state.msg" @myclick="onMyclick"/>
</template>

<script setup>
// 1直接导入组件
import Comp from './Comp.vue'
import { ref, reactive } from 'vue'
import { stuData } from './com'
const compRef = ref(null)

// 定义属性
const state = reactive({
  msg: '父子组件数据交互',
  activeNames: [0],
  stuData: stuData
})

const onMyclick = (val) => {
  console.info(compRef, val, 3333)
  compRef.value?.handleClick('handle')
}
</script>
