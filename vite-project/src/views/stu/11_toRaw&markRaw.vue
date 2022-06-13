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
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue'

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

    // 响应数据还原
    let obj = toRaw(person)
    console.log(obj);
    
    // 添加不响应数据
    let car = {name: '奔驰'}
    person.car = markRaw(car)

    return {
      person,
      ...toRefs(person)
    }
  },
}

/* 
  其它 Composition API
    1. toRaw
      - 作用：将一个由reactive生成的响应式对象转为普通对象
      - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新

    2. markRaw 
      - 作用：标记一个对象，使其永远不会再成为响应式对象
      - 应用场景：
        1. 有些值不应设置为响应式的，例如第三方类库等
        2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能
        
*/
</script>
