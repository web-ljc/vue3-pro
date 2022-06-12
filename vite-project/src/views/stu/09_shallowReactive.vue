<template>
  <div class="fa-div">
    {{person}}
    <div> 姓名：{{ name }} </div>
    <div> 年龄：{{ age }} </div>
    <div> 工作：{{ job.j1.year }} </div>
    <el-button @click="age++, job.j1.year++">change</el-button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, shallowReactive } from 'vue'

export default {
  name: 'Stu',
  setup() {
    let person = shallowReactive({
      name: 'zs',
      age: 10,
      job: {
        j1: {
          year: 1
        }
      }
    })

    return {
      person,
      ...toRefs(person)
    }
  },
}

/* 
  其它 Composition API
    1. shallowReactive：只处理对象最外层属性的响应式（浅响应式）
    2. shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理
    - 什么时候有用？
      1. 如果有一个对象数据，结构比较深，但变化时只是外层属性变化
      2. 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换

*/
</script>
