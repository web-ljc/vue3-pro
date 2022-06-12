<template>
  <div class="fa-div">
    {{person}}
    <div> 姓名：{{ name }} </div>
    <div> 年龄：{{ age }} </div>
    <div> 工作：{{ job.j1.year }} </div>
    <el-button @click="age++">change年龄</el-button>
    <el-button @click="job.j1.year++">change工作</el-button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, shallowReactive, readonly, shallowReadonly } from 'vue'

export default {
  name: 'Stu',
  setup() {
    let person = reactive({
      name: 'zs',
      age: 10,
      job: {
        j1: {
          year: 1
        }
      }
    })
    // 只读
    person = readonly(person)
    // person = shallowReadonly(person)

    return {
      person,
      ...toRefs(person)
    }
  },
}

/* 
  其它 Composition API
    1. readonly：让一个响应式数据变为只读的（深只读）
    2. shallowReadonly：让一个响应式数据变为只读的（浅只读）
    - 应用场景：不希望数据被修改时

*/
</script>
