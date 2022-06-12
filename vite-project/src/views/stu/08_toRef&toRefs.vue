<template>
  <div class="fa-div">
    {{person}}
    <div> 姓名：{{ name }} </div>
    <div> 年龄：{{ age }} </div>
    <div> 工作：{{ job.work }} </div>
    <el-button @click="age++">change</el-button>
  </div>
</template>

<script>
import { ref, reactive, toRef, toRefs } from 'vue'

export default {
  name: 'Stu',
  setup() {
    let person = reactive({
      name: 'zs',
      age: 10,
      job: {
        work: 'web'
      }
    })

    let name = toRef(person, 'name') // name 与 person.name 是一个
    
    return {
      person,
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // work: toRef(person.job, 'work')
      ...toRefs(person)
    }
  },
}

/* 
  toRef
    - 作用：创建一个ref对象，其value值指向另一个对象中的某个属性
    - 语法： const name = toRef(person, 'name')
    - 应用：要将响应式对象中的某个属性单独提供给外部使用时
    - 扩展： toRefs 与 toRef 功能一致，但可以批量创建多个ref对象。语法 toRefs(person)

*/
</script>
